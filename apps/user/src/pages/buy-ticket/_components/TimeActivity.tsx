import { useSearchParams } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import useItemSelect from "@/hooks/useItemSelect";
import { useFormatTime } from "@/hooks/useFormatTime";
import { useQueryTicketingList } from "@/hooks/queries/useQueryTicketingList";

import TimeItem from "./TimeItem";
import SelectTicketItem from "./SelectTicketItem";
import NextButton from "./NextButton";
import HeaderItem from "./HeaderItem";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface TimeParams extends ActivityParams {}

const TimeActivity: ActivityComponentType<TimeParams> = ({ params }) => {
  const { form } = params;

  const formData = form.getValues();
  const univName = formData.univName;
  const { formatDate: showDate } = useFormatTime(formData.date);
  const selectDate = `${formData.showName} (${showDate.slice(2)})`;

  const { selectedItem, handleSelectItem } = useItemSelect();

  const [searchParams] = useSearchParams();
  const ticketingId = searchParams.get("ticketingId");

  const { data: ticketingList } = useQueryTicketingList(ticketingId);

  const setFormValues = (startTime: string, endTime: string) => {
    form.setValue("startTime", startTime!);
    form.setValue("endTime", endTime);
  };

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <div className="flex gap-3 px-[22px] pb-4">
            <SelectTicketItem title="선택 학교" content={univName} />
            <SelectTicketItem title="선택 날짜" content={selectDate} />
          </div>
          <ActivityHeader className="px-[22px]">
            <HeaderItem step={"02"} content={"예매 시간을 선택해 주세요."} />
          </ActivityHeader>
          <div className="flex flex-col gap-4 px-[22px]">
            {ticketingList.map(
              ({ id, startTime, endTime, reservedCount, totalCount }) => (
                <TimeItem
                  key={id}
                  startTime={startTime}
                  endTime={endTime}
                  reservedCount={reservedCount}
                  totalCount={totalCount}
                  isSelected={selectedItem === id}
                  onSelect={() => {
                    handleSelectItem(id);
                    setFormValues(startTime, endTime);
                  }}
                />
              ),
            )}
          </div>
          <ActivityFooter>
            <NextButton
              type="submit"
              activityName={"CompleteActivity" as never}
              disabled={selectedItem === null}
              params={{ form }}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default TimeActivity;
