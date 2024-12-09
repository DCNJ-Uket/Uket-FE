interface SelectTicketItemProps {
  title?: string;
  content?: string;
}

const SelectTicketItem = (props: SelectTicketItemProps) => {
  const { title, content } = props;

  return (
    <div className="flex h-[32px] w-1/2 items-center gap-1.5 rounded-md border-[0.5px] border-[#D9D9D9] bg-[#F2F2F2] pl-3 text-[10px]">
      <div>{title}</div>
      <div className="font-bold">{content}</div>
    </div>
  );
};

export default SelectTicketItem;
