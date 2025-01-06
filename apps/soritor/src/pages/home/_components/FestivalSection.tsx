import { useEffect } from "react";

import DynamicMetaTag from "@/components/DynamicMetaTag";

import { useQueryFestivalInfoByUniversity } from "@/hooks/queries/useQueryFestivalByUniversity";

import SectionItem from "./SectionItem";
import FestivalMap from "./map/FestivalMap";
import Carousel from "./carousel/Carousel";

interface FestivalSectionProps {
  univId: string | null;
  univName: string | null;
  onUpdateEventId: (id: number) => void;
}

const FestivalSection = (props: FestivalSectionProps) => {
  const { univId, univName, onUpdateEventId } = props;

  const { data } = useQueryFestivalInfoByUniversity(univId);

  useEffect(() => {
    if (data && data.id && typeof onUpdateEventId === "function") {
      onUpdateEventId(data.id);
    }
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <DynamicMetaTag
        title={`Uket | ${univName}`}
        description={`${univName}에서 진행중인 공연을 확인해 보세요!`}
        image={data.banners[0].url}
      />
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
