import { useSearchParams } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import useItemSelect from "@/hooks/useItemSelect";
import { useQueryShowList } from "@/hooks/queries/useQueryShowList";

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

  const [searchParams] = useSearchParams();
  const showId = searchParams.get("id");

  const { data: showList } = useQueryShowList(showId);

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader className="px-[22px]">
            <HeaderItem step={"01"} content={"예매 날짜를 선택해 주세요."} />
          </ActivityHeader>
          <div className="flex flex-col gap-4 px-[22px]">
            {showList.map(({ id, name }) => (
              <DateItem
                key={id}
                title={name}
                isSelected={selectedItem === id}
                onSelect={() => handleSelectItem(id)}
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
