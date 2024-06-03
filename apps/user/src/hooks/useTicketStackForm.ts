import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutationBuyTicket } from "./mutations/useMutationBuyTicket";

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const FormSchema = z.object({
  universityId: z.number(),
  reservationId: z.number(),
});

export const useTicketStackForm = () => {
  const { mutateAsync } = useMutationBuyTicket();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      reservationId: -1,
      universityId: -1,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormSchemaType) => {
    const { universityId, reservationId } = data;

    const result = await mutateAsync({ universityId, reservationId });
    return result;
  };

  return { form, onSubmit };
};
