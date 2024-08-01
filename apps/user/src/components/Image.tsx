import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = (props: ImageProps) => {
  const { src, ...rest } = props;
  const imgUrl = import.meta.env.MODE === "development" ? src : `${src}.webp`;

  const imgSrc = new URL(imgUrl || src!, import.meta.url).href;

  return <img src={imgSrc} {...rest} />;
};

export default Image;
