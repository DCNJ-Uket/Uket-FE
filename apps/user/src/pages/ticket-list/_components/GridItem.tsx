interface GridItemProps {
  title: string;
  content: string;
}

const GridItem = (props: GridItemProps) => {
  const { title, content } = props;
  return (
    <div className="text-xs space-y-2">
      <p className="font-bold">{title}</p>
      <p className="text-[#5E5E6E] truncate">{content}</p>
    </div>
  );
};

export default GridItem;
