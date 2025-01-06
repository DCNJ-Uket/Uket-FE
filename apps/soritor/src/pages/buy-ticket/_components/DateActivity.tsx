import { Link, useSearchParams } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import { Suspense, useState } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen, IconBack } from "@stackflow/plugin-basic-ui";

import BuyTicketErrorFallback from "@/components/fallback/BuyTicketErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { useTicketStackForm } from "@/hooks/useTicketStackForm";
import { useShowSelection } from "@/hooks/useShowSelections";
import useItemSelect from "@/hooks/useItemSelect";
import { useFormatTime } from "@/hooks/useFormatTime";

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
  const [searchParams] = useSearchParams();

  const univName = searchParams.get("univName");
  const univId = searchParams.get("univId");
  const eventId = searchParams.get("eventId");

  const { form } = useTicketStackForm();
  form.setValue("universityId", parseInt(univId!, 10));

  const [showId, setShowId] = useState<number>(-1);
  const handleShowId = (id: number) => {
    setShowId(id);
  };

  const backURL = `/home?select-univ=${univName}&id=${univId}`;

  const {
    selectedShowDate,
    setSelectedShowDate,
    selectedShowName,
    setSelectedShowName,
  } = useShowSelection();

  const { selectedItem, handleSelectItem } = useItemSelect();

  const handleSelectDate = (id: number, name: string, startDate: string) => {
    handleSelectItem(id);
    handleShowId(id);
    setSelectedShowDate(startDate);
    setSelectedShowName(name);
  };

  const { formatDate } = useFormatTime(selectedShowDate);
  const formatShowDate =
    selectedShowDate !== ""
      ? `${selectedShowName} (${formatDate.slice(2)})`
      : "";

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <nav className="flex h-14 w-full items-center self-stretch bg-white px-3.5">
            <Link to={backURL}>
              <IconBack />
            </Link>
          </nav>
          <SelectHeader univName={univName} formatShowDate={formatShowDate} />
          <div className="flex grow flex-col justify-start gap-5 py-6">
            <ActivityHeader className="px-5">
              <HeaderItem step={"01"} content={"예매 날짜를 선택해 주세요."} />
            </ActivityHeader>
            <RetryErrorBoundary
              fallbackComponent={(props: FallbackProps) => (
                <BuyTicketErrorFallback {...props} />
              )}
            >
              <Suspense>
                <ShowList
                  eventId={eventId!.toString()}
                  selectedItem={selectedItem}
                  onSelect={handleSelectDate}
                />
              </Suspense>
            </RetryErrorBoundary>
          </div>
          <ActivityFooter className="z-50">
            <NextButton
              activityName={"TimeActivity" as never}
              disabled={selectedItem === null}
              params={{
                univName: univName,
                showId: showId,
                showDate: formatShowDate,
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
