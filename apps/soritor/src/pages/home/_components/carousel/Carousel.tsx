import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@uket/ui/components/ui/carousel";
import { Card, CardContent } from "@uket/ui/components/ui/card";

import Indicator from "@/components/Indicator";

import { FestivalInfo } from "@/types/univType";

import { LazyLoadImage } from "./CarouselLazyImage";
import CarouselDotButtonList from "./CarouselDotButtonList";

interface PropType {
  slides: FestivalInfo["banners"] | undefined;
}

const CarouselT = (props: PropType) => {
  const { slides } = props;
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const updateSlidesInView = () => {
      setSlidesInView(slidesInView => {
        if (slidesInView.length === emblaApi.slideNodes().length) {
          emblaApi.off("slidesInView", updateSlidesInView);
        }
        const inView = emblaApi
          .slidesInView()
          .filter((index: number) => !slidesInView.includes(index));
        return slidesInView.concat(inView);
      });
    };

    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi]);

  const slideComponent = !slides ? (
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <p className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-100 text-gray-500">
              배너가 존재하지 않아요 😢
            </p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ) : (
    slides.map(({ title, url, redirectUrl }, index) => (
      <CarouselItem key={url} className="basis-full">
        <Link to={redirectUrl || "/404"} target="_blank">
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="relative h-44 rounded-lg p-0 shadow-md sm:h-80 lg:h-96">
                <LazyLoadImage
                  imgSrc={url}
                  inView={slidesInView.indexOf(index) > -1}
                />
                <Indicator
                  title={title}
                  className="text-desc left-3 top-3 text-xs"
                />
              </CardContent>
            </Card>
          </div>
        </Link>
      </CarouselItem>
    ))
  );

  return (
    <Carousel
      className="w-full max-w-full"
      opts={{ align: "start" }}
      setApi={setEmblaApi}
    >
      <CarouselContent>{slideComponent}</CarouselContent>
      <CarouselDotButtonList emblaApi={emblaApi} />
    </Carousel>
  );
};

export default CarouselT;
