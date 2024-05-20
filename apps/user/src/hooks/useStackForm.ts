import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutationSignup } from "@/hooks/mutations/useMutationSignup";

import { EXP } from "../utils/vaildateForm";

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const FormSchema = z
  .object({
    userType: z.enum(["univ", "no_univ"], {
      required_error: "You need to select a notification type.",
    }),
    userName: z.string().regex(EXP.name),
    userPhone: z.string().regex(EXP.phone),
    userEmail: z.string().regex(EXP.email).optional(),
    userId: z.string().optional(),
    userUniv: z.string().optional(),
    userMajor: z.string().optional(),
    userEmailAuth: z.string().optional(),
  })
  .refine(data => {
    if (data.userType === "no_univ") return true;
    else {
      const { userEmail, userId, userUniv, userMajor, userEmailAuth } = data;
      if (
        userEmail === undefined ||
        userId === undefined ||
        userUniv === undefined ||
        userMajor === undefined ||
        userEmailAuth === undefined
      )
        return false;
    }
    return true;
  });

export const useStackForm = () => {
  const { mutateAsync } = useMutationSignup();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
      userPhone: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormSchemaType) => {
    const { userType, userName, userPhone, userUniv, userId, userMajor } = data;

    await mutateAsync({
      userType,
      userName,
      userPhone,
      userUniv,
      userId,
      userMajor,
    });
  };

  return { form, onSubmit };
};
