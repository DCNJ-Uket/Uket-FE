import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";
import { Input } from "@ui/components/ui/input";

function SearchSection() {
  return (
    <section
      className="flex"
      style={{
        boxShadow: "1px 1px 10px 0px #0000000F",
      }}
    >
      <Select defaultValue="phone">
        <SelectTrigger className="bg-formInput min-w-36 gap-2 rounded-l-lg text-black">
          <SelectValue placeholder="전화번호 뒷자리" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="phone">전화번호 뒷자리</SelectItem>
          <SelectItem value="depositorName">입금자명</SelectItem>
          <SelectItem value="ticketDate">티켓 날짜</SelectItem>
          <SelectItem value="userType">사용자 구분</SelectItem>
          <SelectItem value="ticketStatus">티켓 상태</SelectItem>
        </SelectContent>
      </Select>
      <Input
        isIcon
        className="w-44 rounded-none rounded-r-lg border-none ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </section>
  );
}

export default SearchSection;
