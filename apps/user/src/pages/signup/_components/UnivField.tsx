import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@uket/ui/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@uket/ui/components/ui/form";

import { FormType } from "@/hooks/useStackForm";
import { useQueryUniversityList } from "@/hooks/queries/useQueryUniversityList";

interface UnivFieldProps {
  form: FormType;
}

const UnivField = (props: UnivFieldProps) => {
  const { form } = props;
  const { data } = useQueryUniversityList();

  return (
    <FormField
      control={form.control}
      name="userUniv"
      render={({ field }) => (
        <FormItem>
          <FormLabel>학교</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="학교 선택" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map(({ name }) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default UnivField;
