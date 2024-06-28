interface InfoItemProps {
  title: string;
  content: string;
}

const InfoItem = (props: InfoItemProps) => {
  const { title, content } = props;

  return (
    <div className="grid w-full grid-cols-2 text-xs font-semibold">
      <p className="text-[#5A5A5A]">{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default InfoItem;
