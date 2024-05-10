import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";

import { useQueryFestivalUnivList } from "@/hooks/queries/useQueryFestivalUnivList";

interface UnivSelectorProps {
  currentUniv: string | null;
  onSelect: (id: string, name: string) => void;
}

const UnivSelector = (props: UnivSelectorProps) => {
  const { currentUniv, onSelect } = props;
  const { data: univList } = useQueryFestivalUnivList();

  const handleSelect = (value: string) => {
    const selectedUniv = univList.find(({ name }) => name === value);
    onSelect &&
      onSelect(selectedUniv ? selectedUniv.id.toString() : "-1", value);
  };

  return (
    <Select
      defaultValue={currentUniv || undefined}
      onValueChange={handleSelect}
    >
      <SelectTrigger className="mt-3 w-full border-[#8989A1]">
        <SelectValue placeholder="대학교" />
      </SelectTrigger>
      <SelectContent>
        {univList.map(({ id, name }) => (
          <SelectItem key={id} value={name}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default UnivSelector;
