import { CarouselApi } from "@uket/ui/components/ui/carousel";

import { useDotButton } from "@/hooks/useDotButton";

import { CarouselDotButton } from "./CarouselDotButton";

import "./Carousel.css";

interface CarouselDotButtonListProps {
  emblaApi: CarouselApi;
}

const CarouselDotButtonList = (props: CarouselDotButtonListProps) => {
  const { emblaApi } = props;
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla__controls">
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            selected={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselDotButtonList;
