import React from "react";

interface SectionItemProps {
  title: string;
  item: React.ReactNode;
}

const SectionItem = (props: SectionItemProps) => {
  const { title, item } = props;
  return (
    <div className="space-y-2">
      <h1 className="text-lg font-bold">{title}</h1>
      {item}
    </div>
  );
};

export default SectionItem;
