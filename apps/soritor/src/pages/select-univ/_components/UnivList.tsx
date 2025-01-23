import { useQueryFestivalList } from '@uket/api/queries/festival'

import UnivItem from "./UnivItem";

interface UnivListProps {
  selectedUnivId: number | null;
  onSelect: (id: number, name: string) => void;
}

const UnivList = (props: UnivListProps) => {
  const { selectedUnivId, onSelect } = props;
  const { data: univList } = useQueryFestivalList();

  return (
    <main className="grid grow auto-rows-min grid-cols-2 items-start gap-3 md:grid-cols-2">
      {univList.length > 0 &&
        univList.map(({ id, name, eventName, logoUrl, startDateTime }) => (
          <UnivItem
            key={id}
            isSelected={selectedUnivId === id}
            onSelect={() => onSelect(id, eventName)}
            logoUrl={logoUrl}
            name={name}
            eventName={eventName}
            startDateTime={startDateTime}
          />
        ))}
      {univList.length === 0 && (
        <div className="text-desc col-span-full text-center text-lg">
          조회된 공연이 없습니다.
        </div>
      )}
    </main>
  );
};

export default UnivList;
