import { useState, useCallback } from "react";

import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="embla__slide">
      {!hasLoaded && <Skeleton className="w-full h-full" />}
      {inView && (
        <img
          className="block object-cover w-full h-full bg-gray-100 rounded-lg"
          onLoad={setLoaded}
          src={imgSrc}
          alt="축제 배너"
          data-src={imgSrc}
        />
      )}
    </div>
  );
};
