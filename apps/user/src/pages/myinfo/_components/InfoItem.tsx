interface InfoItemProps {
  title: string;
  content: string;
}

const InfoItem = (props: InfoItemProps) => {
  const { title, content } = props;

  return (
    <div className="grid w-full grid-cols-2 text-[13px] text-[#5E5E6E]">
      <p>{title}</p>
      <p className="font-semibold">{content}</p>
    </div>
  );
};

export default InfoItem;
