import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutationSignup } from "@/hooks/mutations/useMutationSignup";

import { EXP } from "../utils/vaildateForm";

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const FormSchema = z.object({
  userType: z.enum(["no_univ"], {
    required_error: "You need to select a notification type.",
  }),
  userName: z.string().regex(EXP.name),
  userPhone: z.string().regex(EXP.phone),
});

export const useStackForm = () => {
  const { mutateAsync } = useMutationSignup();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userType: "no_univ",
      userName: "",
      userPhone: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormSchemaType) => {
    const { userType, userName, userPhone } = data;

    await mutateAsync({
      userType,
      userName,
      userPhone,
    });
  };

  return { form, onSubmit };
};
