//TODO: 추후 ticket-list의 CellItem과 하나로 합쳐서 사용할 예정

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
