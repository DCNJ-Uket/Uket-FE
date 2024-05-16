import { Skeleton } from "@/components/ui/skeleton";

const FestivalSectionSuspenseFallback = () => {
  return (
    <section className="grow">
      <main className="flex flex-col gap-3">
        <div className="space-y-2">
          <Skeleton className="w-40 h-6" />
          <Skeleton className="w-full h-44 sm:h-80 lg:h-96" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-40 h-6" />
          <Skeleton className="w-full h-44 sm:h-80 lg:h-96" />
        </div>
      </main>
    </section>
  );
};

export default FestivalSectionSuspenseFallback;
