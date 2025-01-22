/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useQueryFestivalDetail } from "@uket/api/queries/festival";

import SectionItem from "./SectionItem";
import FestivalMap from "./map/FestivalMap";
import Carousel from "./carousel/Carousel";

interface FestivalSectionProps {
  univId: string | null;
  univName: string | null;
  onUpdateEventId: (id: number) => void;
}

const FestivalSection = (props: FestivalSectionProps) => {
  const { univId, onUpdateEventId } = props;

  const { data } = useQueryFestivalDetail(Number(univId));

  useEffect(() => {
    if (data && data.id && typeof onUpdateEventId === "function") {
      onUpdateEventId(data.id);
    }
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <SectionItem
        title="공연 정보 바로가기"
        item={<Carousel slides={data.banners} />}
      />
      <SectionItem
        title="입장 위치"
        item={<FestivalMap festivalLocation={data.location} />}
      />
    </div>
  );
};

export default FestivalSection;
