import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";
import { Input } from "@ui/components/ui/input";

interface SearchSectionProps {
  handleTicketSearch: () => void;
  handleSearchValue: (value: string) => void;
  handleSearchType: (type: string) => void;
  searchType: string;
  searchValue: string;
}

function SearchSection(props: SearchSectionProps) {
  const {
    handleTicketSearch,
    handleSearchValue,
    handleSearchType,
    searchType,
    searchValue,
  } = props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleTicketSearch();
    }
  };

  return (
    <section
      className="flex"
      style={{
        boxShadow: "1px 1px 10px 0px #0000000F",
      }}
    >
      <Select defaultValue={searchType} onValueChange={handleSearchType}>
        <SelectTrigger className="bg-formInput min-w-48 gap-2 rounded-l-lg text-black">
          <SelectValue placeholder="입금자명" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USER_NAME">입금자명</SelectItem>
          <SelectItem value="PHONE_NUMBER">전화번호 뒷자리</SelectItem>
          <SelectItem value="SHOW_DATE">티켓 날짜(YY.MM.DD)</SelectItem>
          <SelectItem value="RESERVATION_USER_TYPE">사용자 구분</SelectItem>
          <SelectItem value="STATUS">티켓 상태</SelectItem>
        </SelectContent>
      </Select>
      <Input
        isIcon
        iconClick={handleTicketSearch}
        value={searchValue}
        onChange={e => handleSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-44 rounded-none rounded-r-lg border-none ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </section>
  );
}

export default SearchSection;
