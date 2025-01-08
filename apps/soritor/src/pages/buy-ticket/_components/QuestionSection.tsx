import { useState } from "react";
import { Input } from "@uket/ui/components/ui/input";

import { OptionType } from "@/types/surveyType";

import PerformerSheet from "./PerformerSheet";

interface QuestionSectionProps {
  isNecessary: boolean;
  performer: string;
  setPerformer: (performer: string) => void;
  question: string;
  performerList: OptionType[];
}

const QuestionSection = (props: QuestionSectionProps) => {
  const { isNecessary, performer, setPerformer, question, performerList } =
    props;

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSelectPerformer = (performer: string) => {
    setPerformer(performer);
    setIsSheetOpen(false);
  };

  return (
    <div className="flex grow flex-col justify-start gap-4 px-[22px]">
      <section className="flex flex-col gap-2 rounded-lg bg-white px-5 py-5 pt-4 shadow-lg">
        <h1 className="text-[15px] font-bold">
          {isNecessary ? "(필수)" : "(선택)"} {question}
        </h1>
        <Input
          isLeftIcon
          value={performer}
          placeholder="지인검색"
          onClick={() => setIsSheetOpen(true)}
          readOnly
        />
      </section>
      <PerformerSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        performers={performerList.map(option => option.value)}
        onSelectPerformer={handleSelectPerformer}
      />
    </div>
  );
};

export default QuestionSection;
