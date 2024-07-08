import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useTicketStackForm } from "@/hooks/useTicketStackForm";
import { useShowSelection } from "@/hooks/useShowSelections";
import useItemSelect from "@/hooks/useItemSelect";
import { useFormatTime } from "@/hooks/useFormatTime";
import useDateTicketParams from "@/hooks/useDateTicketParams";
import { useQueryShowList } from "@/hooks/queries/useQueryShowList";

import ShowList from "./ShowList";
import SelectHeader from "./SelectHeader";
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

  const { data } = useQueryShowList(eventId);
  const { reservationUserType, shows } = data;

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
  const formatShowDate =
    selectedShowDate !== ""
      ? `${selectedShowName} (${formatDate.slice(2)})`
      : "";

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <SelectHeader
            univName={univName}
            reservationUserType={reservationUserType}
            formatShowDate={formatShowDate}
          />

          <ActivityHeader className="px-[22px]">
            <HeaderItem step={"01"} content={"예매 날짜를 선택해 주세요."} />
          </ActivityHeader>

          <ShowList
            shows={shows}
            selectedItem={selectedItem}
            onSelect={handleSelectDate}
          />

          <ActivityFooter>
            <NextButton
              activityName={"TimeActivity" as never}
              disabled={selectedItem === null}
              params={{
                showDate: formatShowDate,
                reservationUserType: reservationUserType,
                form,
              }}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default DateActivity;
