import Image from "next/image";

import ChevronsImage from "/public/threeChevrons.png";

const ThreeChevrons = () => {
  return (
    <Image
      src={ChevronsImage}
      alt="화살표"
      width={18}
      height={10}
      className="object-cover"
    />
  );
};

export default ThreeChevrons;
