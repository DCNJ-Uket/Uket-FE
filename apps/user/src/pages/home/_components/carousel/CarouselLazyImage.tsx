import { useState, useCallback } from "react";
import { Skeleton } from "@uket/ui/components/ui/skeleton";

interface PropType {
  imgSrc: string;
  inView: boolean;
  index: number;
}

export const LazyLoadImage = (props: PropType) => {
  const { imgSrc, inView } = props;
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <>
      {!hasLoaded && <Skeleton className="h-full w-full" />}
      {inView && (
        <img
          className="block h-full w-full rounded-lg bg-gray-100 object-cover"
          onLoad={setLoaded}
          src={imgSrc}
          alt="축제 배너"
          data-src={imgSrc}
        />
      )}
    </>
  );
};
