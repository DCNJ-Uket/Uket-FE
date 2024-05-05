import React from "react";

interface IconProps {
  id: string;
  size?: number | string;
}

const Icon = (props: React.SVGProps<SVGSVGElement> & IconProps) => {
  const { id, size = "100%", ...rest } = props;
  return (
    <svg width={size} height={size} {...rest}>
      <use href={`#${id}`} width={size} height={size} />
    </svg>
  );
};

export default Icon;
