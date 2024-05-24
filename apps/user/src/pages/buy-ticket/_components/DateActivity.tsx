import { useSearchParams } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useTicketStackForm } from "@/hooks/useTicketStackForm";
import useItemSelect from "@/hooks/useItemSelect";
import { useQueryShowList } from "@/hooks/queries/useQueryShowList";

import SelectTicketItem from "./SelectTicketItem";
import NextButton from "./NextButton";
import HeaderItem from "./HeaderItem";
import DateItem from "./DateItem";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

const DateActivity: ActivityComponentType = () => {
  const { form } = useTicketStackForm();

  const { selectedItem, handleSelectItem } = useItemSelect();

  const [searchParams, setSearchParams] = useSearchParams();
  const showId = searchParams.get("showId");
  const univName = searchParams.get("univName");

  const { data: showList } = useQueryShowList(showId);

  const handleTicketParams = (showId: string | null, ticketingId: number) => {
    searchParams.set("univName", univName as string);
    searchParams.set("showId", showId as string);
    searchParams.set("ticketingId", ticketingId.toString());
    setSearchParams(searchParams);
  };

  const setFormValues = (name: string, startDate: string) => {
    form.setValue("univName", univName!);
    form.setValue("showName", name);
    form.setValue("date", startDate);
  };

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <div className="flex gap-3 px-[22px] pb-4">
            <SelectTicketItem title="선택 학교" content={univName!} />
          </div>
          <ActivityHeader className="px-[22px]">
            <HeaderItem step={"01"} content={"예매 날짜를 선택해 주세요."} />
          </ActivityHeader>
          <div className="flex flex-col gap-4 px-[22px]">
            {showList.map(
              ({
                id,
                name,
                startDate,
                endDate,
                ticketingDate,
                totalTicketCount,
              }) => (
                <DateItem
                  key={id}
                  name={name}
                  startDate={startDate}
                  endDate={endDate}
                  ticketingDate={ticketingDate}
                  totalTicketCount={totalTicketCount}
                  isSelected={selectedItem === id}
                  onSelect={() => {
                    handleSelectItem(id);
                    handleTicketParams(showId, id);
                    setFormValues(name, startDate);
                  }}
                />
              ),
            )}
          </div>

          <ActivityFooter>
            <NextButton
              activityName={"TimeActivity" as never}
              disabled={selectedItem === null}
              params={{ form }}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default DateActivity;
