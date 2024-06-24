import React from "react";

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const InfoSection = (props: InfoSectionProps) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="pl-3 text-sm font-bold">{title}</div>
      <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-6">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
