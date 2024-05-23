import { useEffect } from "react";

import { useQueryFestivalInfoByUniversity } from "@/hooks/queries/useQueryFestivalByUniversity";

import SectionItem from "./SectionItem";
import FestivalMap from "./map/FestivalMap";
import Carousel from "./carousel/Carousel";

interface FestivalSectionProps {
  univId: string | null;
  updateShowId: (id: number) => void;
}

const FestivalSection = (props: FestivalSectionProps) => {
  const { univId, updateShowId } = props;
  const { data } = useQueryFestivalInfoByUniversity(univId);

  useEffect(() => {
    if (data && data.id) {
      updateShowId(data.id);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-3">
      <SectionItem
        title="축제 일정﹒라인업"
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
