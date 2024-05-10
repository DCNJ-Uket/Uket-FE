import { Skeleton } from "@/components/ui/skeleton";

const UnivListFallback = () => {
  return (
    <>
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 justify-center items-center w-24 h-32"
        >
          <Skeleton className="p-3 w-full h-full bg-white rounded-2xl aspect-square" />
          <Skeleton className="w-20 h-10 bg-white" />
        </div>
      ))}
    </>
  );
};

export default UnivListFallback;
