import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import useItemSelect from "@/hooks/useItemSelect";

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
  const { selectedItem, handleSelectItem } = useItemSelect();

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader className="px-[22px]">
            <HeaderItem step={"01"} content={"예매 날짜를 선택해 주세요."} />
          </ActivityHeader>
          <div className="flex flex-col gap-4 px-[22px]">
            {Array.from({ length: 14 }).map((_, index) => (
              <DateItem
                key={index}
                title={`Day ${index + 1}`}
                isSelected={selectedItem === index}
                onSelect={() => handleSelectItem(index)}
              />
            ))}
          </div>

          <ActivityFooter>
            <NextButton
              activityName={"TimeActivity" as never}
              disabled={selectedItem === null}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default DateActivity;
