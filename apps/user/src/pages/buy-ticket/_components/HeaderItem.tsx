interface HeaderItemProps {
  step: string;
  content: string;
}

const HeaderItem = (props: HeaderItemProps) => {
  const { step, content } = props;
  return (
    <>
      <p className="text-[15px] font-light text-[#5E5E6E]">{`STEP ${step}`}</p>
      <h1 className="text-[23px] font-black">
        <p>{content}</p>
      </h1>
    </>
  );
};

export default HeaderItem;
