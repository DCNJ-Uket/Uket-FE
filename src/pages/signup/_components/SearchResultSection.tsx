import { useMemo } from "react";

import { useQueryUnivOrMajor } from "@/hooks/queries/useQueryUniv";

import { MajorInfo, UniversityInfo } from "@/types/univType";

import SearchSelector from "./SearchSelector";

import { getMajorList, getUniversityList } from "@/api/univ";

interface SearchResultSectionProps
  extends Pick<React.ComponentProps<typeof SearchSelector>, "formType"> {
  value: string;
  onSelect: (item: string) => void;
}

type ConditionalType = UniversityInfo | MajorInfo;
type ConditionalListType = ConditionalType[];

const SearchResultSection = (props: SearchResultSectionProps) => {
  const { value, formType, onSelect } = props;
  const callbackFn: (query: string) => Promise<ConditionalListType> =
    formType === "userUniv"
      ? (getUniversityList as (query: string) => Promise<UniversityInfo[]>)
      : (getMajorList as (query: string) => Promise<MajorInfo[]>);

  const { data } = useQueryUnivOrMajor<ConditionalType>(
    value,
    callbackFn,
  );

  const isUnivInfoArray = useMemo(
    () =>
      (data: ConditionalListType): data is UniversityInfo[] => {
        return data.every(
          item => (item as UniversityInfo).schoolName !== undefined,
        );
      },
    [],
  );

  const isMajorInfoArray = useMemo(
    () =>
      (data: ConditionalListType): data is MajorInfo[] => {
        return data.every(item => (item as MajorInfo).mClass !== undefined);
      },
    [],
  );

  return (
    <div className="flex overflow-y-scroll flex-col gap-2">
      {isUnivInfoArray(data) &&
        data.map(({ adres, schoolName }) => (
          <div
            key={adres}
            className="flex flex-col gap-1 p-2 rounded-md cursor-pointer hover:bg-slate-100"
          >
            <h1 onClick={() => onSelect(schoolName)}>{schoolName}</h1>
            <h2 className="text-xs text-gray-500 truncate">{adres}</h2>
          </div>
        ))}
      {isMajorInfoArray(data) &&
        data.map(({ mClass, majorSeq }) => (
          <div
            key={majorSeq}
            className="flex flex-col gap-1 p-2 rounded-md cursor-pointer hover:bg-slate-100"
            onClick={() => onSelect(mClass)}
          >
            {mClass}
          </div>
        ))}
    </div>
  );
};

export default SearchResultSection;
