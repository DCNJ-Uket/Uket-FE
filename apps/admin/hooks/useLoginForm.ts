"use client";

import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

import { LOGIN_ERROR } from "@/constants/error";

import { useMutationLogin } from "./mutations/useMutationLogin";

export type FormSchemaType = z.infer<typeof LoginFormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

const LoginFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: "유효하지 않은 이메일입니다." })
      .min(1, { message: "이메일을 입력해 주세요." }),
    password: z.string().min(1, { message: "비밀번호를 입력해 주세요." }),
  })
  .required();

export const useLoginForm = () => {
  const { mutate, error } = useMutationLogin();
  
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormSchemaType) => {
    const { email, password } = data;

    mutate({
      email,
      password,
    });
  };

  return {
    form,
    onSubmit,
    error:
      error && isAxiosError(error)
        ? LOGIN_ERROR[error.response?.status as keyof typeof LOGIN_ERROR][
            error.response?.data.code
          ].title
        : null,
  };
};
