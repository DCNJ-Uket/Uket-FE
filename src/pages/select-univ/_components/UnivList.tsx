import { useQueryUnivList } from "@/hooks/queries/useQueryUnivList";

import UnivItem from "./UnivItem";

interface UnivListProps {
  selectedUniv: string | null;
  onSelect: (name: string) => void;
}

const UnivList = (props: UnivListProps) => {
  const { selectedUniv, onSelect } = props;
  const { data: univList } = useQueryUnivList();

  return univList!.map(({ id, name, logoUrl }) => (
    <UnivItem
      key={id}
      selected={selectedUniv === name}
      onSelect={() => onSelect(name)}
      logoUrl={logoUrl}
      name={name}
    />
  ));
};

export default UnivList;
