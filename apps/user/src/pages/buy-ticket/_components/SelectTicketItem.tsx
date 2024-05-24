interface SelectTicketItemProps {
  title: string;
  content: string;
}

const SelectTicketItem = (props: SelectTicketItemProps) => {
  const { title, content } = props;

  return (
    <div className="flex h-[32px] w-[162px] items-center gap-1.5 rounded-md bg-[#D9D9D9] pl-3 text-[10px]">
      <div>{title}</div>
      <div className="font-bold">{content}</div>
    </div>
  );
};

export default SelectTicketItem;
