import { Skeleton } from "@uket/ui/components/ui/skeleton";

const UnivListFallback = () => {
  return (
    <main className="grid grow auto-rows-min grid-cols-2 gap-5 justify-items-center">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="flex h-52 w-full flex-col items-center justify-center gap-3"
        >
          <Skeleton className="rounded-2xl bg-white p-3 h-40 w-full" />
          <Skeleton className="h-4 w-1/4 bg-white" />
          <Skeleton className="h-4 w-1/2 bg-white" />
        </div>
      ))}
    </main>
  );
};

export default UnivListFallback;
