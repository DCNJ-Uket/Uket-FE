import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = (props: ImageProps) => {
  const { src, ...rest } = props;
  const imgUrl =
    import.meta.env.MODE === "development"
      ? src
      : `@dist${src}.webp` !== undefined
        ? `@dist${src}.webp`
        : `@dist${src}`;

  const imgSrc = new URL(imgUrl || "", import.meta.url).href;

  return <img src={imgSrc} {...rest} />;
};

export default Image;
