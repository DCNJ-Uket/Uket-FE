import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const FormSchema = z.object({
  universityId: z.number(),
  reservationId: z.number(),
});

export const useTicketStackForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      reservationId: -1,
      universityId: -1,
    },
    mode: "onChange",
  });

  const onSubmit = async () => {};

  return { form, onSubmit };
};