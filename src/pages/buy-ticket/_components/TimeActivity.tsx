
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import useItemSelect from "@/hooks/useItemSelect";

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

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <HeaderItem step={"02"} content={"예매 시간을 선택해 주세요."} />
          </ActivityHeader>
          {Array.from({ length: 14 }).map((_, index) => (
            <TimeItem
              key={index}
              title={`Time ${index + 1}`}
              isSelected={selectedItem === index}
              onSelect={() => handleSelectItem(index)}
            />
          ))}
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
