import { useQueryFestivalUnivList } from "@/hooks/queries/useQueryFestivalUnivList";

import UnivItem from "./UnivItem";

interface UnivListProps {
  selectedUnivId: number | null;
  onSelect: (id: number, name: string) => void;
}

const UnivList = (props: UnivListProps) => {
  const { selectedUnivId, onSelect } = props;
  const { data: univList } = useQueryFestivalUnivList();

  return univList!.map(({ id, name, logoUrl }) => (
    <UnivItem
      key={id}
      selected={selectedUnivId === id}
      onSelect={() => onSelect(id, name)}
      logoUrl={logoUrl}
      name={name}
    />
  ));
};

export default UnivList;
