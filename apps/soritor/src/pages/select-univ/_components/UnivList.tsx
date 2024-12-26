import { useQueryFestivalUnivList } from "@/hooks/queries/useQueryFestivalUnivList";

import UnivItem from "./UnivItem";

interface UnivListProps {
  selectedUnivId: number | null;
  onSelect: (id: number, name: string) => void;
}

const UnivList = (props: UnivListProps) => {
  const { selectedUnivId, onSelect } = props;
  const { data: univList } = useQueryFestivalUnivList();

  return (
    <main className="grid grow auto-rows-min grid-cols-3 gap-3 md:grid-cols-4">
      {univList.length > 0 &&
        univList.map(({ id, name, logoUrl }) => (
          <UnivItem
            key={id}
            isSelected={selectedUnivId === id}
            onSelect={() => onSelect(id, name)}
            logoUrl={logoUrl}
            name={name}
          />
        ))}
      {univList.length === 0 && (
        <div className="col-span-full text-center text-desc text-lg">
          조회된 공연이 없습니다.
        </div>
      )}
    </main>
  );
};

export default UnivList;
