import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const FormSchema = z.object({
  univName: z.string(),
  showName: z.string(),
  date: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});

export const useTicketStackForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      univName: "",
      showName: "",
      date: "",
      startTime: "",
      endTime: "",
    },
    mode: "onChange",
  });

  const onSubmit = async () => {};

  return { form, onSubmit };
};
