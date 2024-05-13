import { useQueryFestivalInfoByUniversity } from "@/hooks/queries/useQueryFestivalByUniversity";

import FestivalMap from "./map/FestivalMap";
import Carousel from "./carousel/Carousel";

interface FestivalSectionProps {
  univId: string | null;
}

const FestivalSection = (props: FestivalSectionProps) => {
  const { univId } = props;
  const { data } = useQueryFestivalInfoByUniversity(univId);

  return (
    <section className="grow">
      <div className="flex flex-col gap-3">
        <div className="space-y-2">
          <h1 className="text-lg font-bold">축제 일정﹒라인업</h1>
          <Carousel slides={data?.banners} />
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-bold">입장 위치</h1>
          <FestivalMap festivalLocation={data?.location} />
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
