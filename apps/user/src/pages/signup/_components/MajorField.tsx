import { Input } from "@uket/ui/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@uket/ui/components/ui/form";

import { FormType } from "@/hooks/useStackForm";

interface MajorFieldProps {
  form: FormType;
}

const MajorField = (props: MajorFieldProps) => {
  const { form } = props;

  return (
    <FormField
      control={form.control}
      name="userMajor"
      render={({ field }) => (
        <FormItem>
          <FormLabel>학과</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="학과 입력"
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

export default MajorField;
