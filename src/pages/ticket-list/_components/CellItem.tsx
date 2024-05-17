interface CellItemProps {
  title: string;
  content: string;
}

const CellItem = (props: CellItemProps) => {
  const { title, content } = props;
  return (
    <div>
      <p className="font-bold">{title}</p>
      <p className="text-[#5E5E6E]">{content}</p>
    </div>
  );
};

export default CellItem;
