import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

import { useDotButton } from "@/hooks/useDotButton";

import { FestivalInfo } from "@/types/univType";

import { LazyLoadImage } from "./CarouselLazyImage";
import { DotButton } from "./CarouselDotButton";

interface PropType {
  slides: FestivalInfo["banners"] | undefined;
}

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

const Carousel = (props: PropType) => {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView(slidesInView => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off("slidesInView", updateSlidesInView);
      }
      const inView = emblaApi
        .slidesInView()
        .filter(index => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  const slideComponent = !slides ? (
    <div className="embla__slide">
      <p className="flex flex-col justify-center items-center w-full h-full text-gray-500 bg-gray-100 rounded-lg">
        배너가 존재하지 않아요 😢
      </p>
    </div>
  ) : (
    slides.map(({ url }, index) => (
      <LazyLoadImage
        key={index}
        index={index}
        imgSrc={url}
        inView={slidesInView.indexOf(index) > -1}
      />
    ))
  );
  useEffect(() => {
    if (!emblaApi) return;

    updateSlidesInView(emblaApi);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <section className="w-full h-44 rounded-lg shadow-md embla">
      <div className="w-full h-full embla__viewport" ref={emblaRef}>
        <div className="h-full embla__container">{slideComponent}</div>
        <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : "",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
