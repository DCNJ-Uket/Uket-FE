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
          <FormLabel className="text-desc">학교</FormLabel>
          <Select
            onValueChange={value => {
              const selectedUniv = data.find(univ => univ.name === value);
              field.onChange({
                univName: value,
                univId: selectedUniv?.universityId,
              });
            }}
            defaultValue={field.value?.univName}
          >
            <FormControl>
              <SelectTrigger className="border-formInput border">
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
