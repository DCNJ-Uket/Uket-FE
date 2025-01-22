import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@uket/util/token";
import { user } from "@uket/api/queries/user";
import { useMutationSignup } from "@uket/api/mutations/useMutationSignup";
import { useQueryClient } from "@uket/api";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const queryClient = useQueryClient();
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
    const { userName, userPhone } = data;

    await mutateAsync(
      {
        userName,
        userPhone,
      },
      {
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: user.info().queryKey });
        },
        onSuccess: ({ accessToken, refreshToken }) => {
          ACCESS_TOKEN.set(accessToken);
          REFRESH_TOKEN.set("refreshToken", refreshToken);
        },
      },
    );
  };

  return { form, onSubmit };
};
