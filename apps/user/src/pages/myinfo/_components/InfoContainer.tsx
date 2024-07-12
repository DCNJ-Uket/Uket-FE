interface InfoContainerProps {
  title: string;
  children: React.ReactNode;
}

const InfoContainer = (props: InfoContainerProps) => {
  const { title, children } = props;

  return (
    <div className="flex w-full flex-col gap-2 bg-white px-6 pb-6 pt-4">
      <div className="flex h-8 items-center justify-between">
        <div className="text-lg font-bold text-[#17171B]">{title}</div>
      </div>
      <div className="mb-3 w-full border-t-[0.3px] border-[#5E5E6E] opacity-50"></div>
      <div className="flex flex-col gap-[10px]">{children}</div>
    </div>
  );
};

export default InfoContainer;
