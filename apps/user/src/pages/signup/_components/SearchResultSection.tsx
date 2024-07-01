import { useQueryUniversityList } from "@/hooks/queries/useQueryUniversityList";

interface SearchResultSectionProps {
  onSelect: (item: string) => void;
}

const SearchResultSection = (props: SearchResultSectionProps) => {
  const { onSelect } = props;

  const { data } = useQueryUniversityList();

  return (
    <div className="flex flex-col gap-2 overflow-y-scroll">
      {data.map(({ name }) => (
        <div
          key={name}
          className="flex cursor-pointer flex-col gap-1 rounded-md p-2 hover:bg-slate-100"
        >
          <h1 className="truncate" onClick={() => onSelect(name)}>
            {name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default SearchResultSection;
