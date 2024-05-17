import { Skeleton } from "@/components/ui/skeleton";

const UnivListFallback = () => {
  return (
    <main className="grid grow auto-rows-min grid-cols-3 gap-5 md:grid-cols-6">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="flex h-32 w-24 flex-col items-center justify-center gap-3"
        >
          <Skeleton className="aspect-square h-full w-full rounded-2xl bg-white p-3" />
          <Skeleton className="h-10 w-20 bg-white" />
        </div>
      ))}
    </main>
  );
};

export default UnivListFallback;
