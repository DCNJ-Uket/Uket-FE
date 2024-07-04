import { Input } from "@uket/ui/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@uket/ui/components/ui/form";

import { FormType } from "@/hooks/useStackForm";

interface UserIdFieldProps {
  form: FormType;
}

const UserIdField = (props: UserIdFieldProps) => {
  const { form } = props;
  return (
    <FormField
      control={form.control}
      name="userId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>학번</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="학번"
              className="border-formInput border"
              autoComplete="off"
              value={field.value || ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default UserIdField;
