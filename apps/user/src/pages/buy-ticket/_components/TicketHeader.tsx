import CircleButton from "./CircleButton";

interface TicketHeaderProps {
  title: string;
  isSelected: boolean;
  fontStyle: string;
}

const TicketHeader = (props: TicketHeaderProps) => {
  const { title, isSelected, fontStyle } = props;

  return (
    <div className="flex justify-between">
      <div className={fontStyle}>{title}</div>
      <div className="self-center">
        <CircleButton isSelected={isSelected} />
      </div>
    </div>
  );
};

export default TicketHeader;
