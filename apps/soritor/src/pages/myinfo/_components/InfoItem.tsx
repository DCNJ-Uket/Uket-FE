interface InfoItemProps {
  title: string;
  content: string;
  isEdit?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InfoItem = (props: InfoItemProps) => {
  const { title, content, isEdit, onChange } = props;

  return (
    <div className="grid h-7 w-full grid-cols-2 text-[13px] text-[#5E5E6E]">
      <div className="flex items-center">{title}</div>
      {isEdit ? (
        <input
          className="box-border h-full rounded bg-[#F2F2F2] pl-1.5 font-semibold leading-7"
          value={content}
          onChange={onChange}
        />
      ) : (
        <div className="flex items-center pl-1.5 font-semibold leading-7">
          {content}
        </div>
      )}
    </div>
  );
};

export default InfoItem;
