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
          <FormLabel className="text-desc">학과</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="e.g. 컴퓨터공학과"
              className="border-formInput border placeholder:font-light placeholder:text-[#8989A1]"
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
