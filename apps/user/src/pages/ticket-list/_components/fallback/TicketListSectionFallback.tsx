import { Skeleton } from "@uket/ui/components/ui/skeleton";
import { AspectRatio } from "@uket/ui/components/ui/aspect-ratio";

const TicketListSectionFallback = () => {
  return (
    <section className="flex flex-col divide-y p-0">
      <div className="flex h-96 w-72 flex-col rounded-xl rounded-b-3xl rounded-t-xl bg-white">
        <AspectRatio ratio={16 / 9}>
          <Skeleton className="h-full w-full rounded-b-none" />
        </AspectRatio>
        <main className="container flex grow flex-col justify-evenly">
          <div className="space-y-3">
            <Skeleton className="h-4 w-12" />
            <div className="flex gap-3">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
          <div className="grid auto-rows-auto grid-cols-2 gap-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </main>
      </div>
      <div className="container flex justify-between rounded-b-xl rounded-t-3xl bg-white py-5">
        <div className="flex flex-col items-start justify-evenly">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-20 w-20" />
      </div>
    </section>
  );
};

export default TicketListSectionFallback;
