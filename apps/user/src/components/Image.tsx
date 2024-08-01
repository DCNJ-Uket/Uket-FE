import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = (props: ImageProps) => {
  const { src, ...rest } = props;
  const isExternalImage = src!.startsWith("https") || src!.startsWith("blob");

  const imgUrl =
    import.meta.env.MODE === "development"
      ? src
      : isExternalImage
        ? src
        : `${src}.webp`;

  const imgSrc = new URL(imgUrl || src!, import.meta.url).href;

  return <img src={imgSrc} {...rest} />;
};

export default Image;
