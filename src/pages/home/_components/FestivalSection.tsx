import { Skeleton } from "@/components/ui/skeleton";

import { useQueryFestivalInfoByUniversity } from "@/hooks/queries/useQueryFestivalByUniversity";

import Carousel from "./carousel/Carousel";

interface FestivalSectionProps {
  univId: string | null;
}

// TODO: 카카오 지도에 API 응답으로 얻은 위치 연결 & 배너 이미지 슬라이더 구현
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
          <div>
            <Skeleton className="w-full h-40 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
