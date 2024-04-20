import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { EXP } from "../_utils/vaildate";

export interface ActivityParams {
  form: UseFormReturn<z.infer<typeof FormSchema>, unknown, undefined>;
}

const FormSchema = z.object({
  userType: z.enum(["univ", "no_univ"], {
    required_error: "You need to select a notification type.",
  }),
  userName: z.string().regex(EXP.name),
  userPhone: z.string().regex(EXP.phone),
  userEmail: z.string().regex(EXP.email),
  userId: z.string(),
  userUniv: z.string(),
  userMajor: z.string(),
  userEmailAuth: z.string(),
});

export const useStackForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
      userPhone: "",
      userEmail: "",
      userId: "",
      userUniv: "",
      userMajor: "",
      userEmailAuth: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return { form, onSubmit };
};
