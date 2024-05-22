import { useSearchParams } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import useItemSelect from "@/hooks/useItemSelect";
import { useQueryTicketingList } from "@/hooks/queries/useQueryTicketingList";

import TimeItem from "./TimeItem";
import NextButton from "./NextButton";
import HeaderItem from "./HeaderItem";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

const TimeActivity: ActivityComponentType = () => {
  const { selectedItem, handleSelectItem } = useItemSelect();

  const [searchParams] = useSearchParams();
  const ticketingId = searchParams.get("ticketingId");

  const { data: ticketingList } = useQueryTicketingList(ticketingId);

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
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
                  onSelect={() => handleSelectItem(id)}
                />
              ),
            )}
          </div>
          <ActivityFooter>
            <NextButton
              activityName={"CompleteActivity" as never}
              disabled={selectedItem === null}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default TimeActivity;
