import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";

const UnivSelector = () => {
  return (
    <Select>
      <SelectTrigger className="mt-3 w-full border-[#8989A1]">
        <SelectValue placeholder="대학교" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">건국대학교</SelectItem>
        <SelectItem value="dark">연세대학교</SelectItem>
        <SelectItem value="system">고려대학교</SelectItem>
        <SelectItem value="system">서울대학교</SelectItem>
        <SelectItem value="system">카이스트</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UnivSelector;
