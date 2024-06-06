import { Suspense } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { useTicketStackForm } from "@/hooks/useTicketStackForm";
import { useShowSelection } from "@/hooks/useShowSelections";
import useItemSelect from "@/hooks/useItemSelect";
import { useFormatTime } from "@/hooks/useFormatTime";
import useDateTicketParams from "@/hooks/useDateTicketParams";


import ShowList from "./ShowList";
import SelectTicketItem from "./SelectTicketItem";
import NextButton from "./NextButton";
import HeaderItem from "./HeaderItem";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

const DateActivity: ActivityComponentType = () => {
  const { univName, univId, eventId, setTicketParams } = useDateTicketParams();

  const { form } = useTicketStackForm();
  form.setValue("universityId", parseInt(univId!, 10));

  const {
    selectedShowDate,
    setSelectedShowDate,
    selectedShowName,
    setSelectedShowName,
  } = useShowSelection();

  const { selectedItem, handleSelectItem } = useItemSelect();

  const handleTicketParams = (eventId: string, showId: number) => {
    setTicketParams(eventId, showId);
  };

  const handleSelectDate = (id: number, name: string, startDate: string) => {
    handleSelectItem(id);
    handleTicketParams(eventId, id);
    setSelectedShowDate(startDate);
    setSelectedShowName(name);
  };

  const { formatDate } = useFormatTime(selectedShowDate);
  const formatShowDate = `${selectedShowName} (${formatDate.slice(2)})`;

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

          <RetryErrorBoundary>
            <Suspense>
              <ShowList
                eventId={eventId.toString()}
                selectedItem={selectedItem}
                onSelect={handleSelectDate}
              />
            </Suspense>
          </RetryErrorBoundary>

          <ActivityFooter>
            <NextButton
              activityName={"TimeActivity" as never}
              disabled={selectedItem === null}
              params={{ showDate: formatShowDate, form }}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default DateActivity;
