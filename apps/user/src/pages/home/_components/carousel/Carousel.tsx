import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

import Indicator from "@/components/Indicator";

import { useDotButton } from "@/hooks/useDotButton";

import { FestivalInfo } from "@/types/univType";

import { LazyLoadImage } from "./CarouselLazyImage";
import { DotButton } from "./CarouselDotButton";
import "@/styles/Carousel.css";
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
        .filter((index: number) => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  const slideComponent = !slides ? (
    <div className="embla__slide">
      <p className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-100 text-gray-500">
        배너가 존재하지 않아요 😢
      </p>
    </div>
  ) : (
    slides.map(({ title, url }, index) => (
      <div className="embla__slide relative" key={url}>
        <LazyLoadImage
          index={index}
          imgSrc={url}
          inView={slidesInView.indexOf(index) > -1}
        />
        <Indicator title={title} variant={"banner"} />
      </div>
    ))
  );

  useEffect(() => {
    if (!emblaApi) return;

    updateSlidesInView(emblaApi);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <section className="embla h-44 w-full rounded-lg shadow-md sm:h-80 lg:h-96">
      <div className="embla__viewport h-full w-full" ref={emblaRef}>
        <div className="embla__container h-full cursor-pointer">
          {slideComponent}
        </div>
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
