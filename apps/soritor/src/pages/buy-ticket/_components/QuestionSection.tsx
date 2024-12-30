import { useState } from "react";
import { Input } from "@uket/ui/components/ui/input";

import PerformerSheet from "./PerformerSheet";

const QuestionSection = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [outSideInputValue, setOutSideInputValue] = useState("");

  // 임의 리스트
  const performers = [
    "김건국(건반)",
    "김건국(드럼)",
    "건건욱(기타)",
    "김민지(보컬)",
    "박지호(베이스)",
    "조수아(바이올린)",
    "이재훈(첼로)",
    "홍길동(작곡)",
    "유재석(보컬)",
    "정준하(퍼커션)",
    "박명수(베이스)",
    "노홍철(기타)",
    "하하(키보드)",
    "송지효(드럼)",
    "양세찬(트럼펫)",
    "이광수(비올라)",
    "전소민(보컬)",
    "김종국(건반)",
    "송중기(기타)",
    "유나(첼로)",
  ];

  const handleSelectPerformer = (performer: string) => {
    setOutSideInputValue(performer);
    setIsSheetOpen(false);
  };

  return (
    <div className="flex grow flex-col justify-start gap-4 px-[22px]">
      <section className="flex flex-col gap-2 rounded-lg bg-white px-5 py-5 pt-4 shadow-lg">
        <h1 className="text-[15px] font-bold">
          Q1. 어떤 공연자의 지인분이신가요?
        </h1>
        <Input
          isLeftIcon
          value={outSideInputValue}
          placeholder="지인검색"
          onClick={() => setIsSheetOpen(true)}
          readOnly
        />
      </section>
      <PerformerSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        performers={performers}
        onSelectPerformer={handleSelectPerformer}
      />
    </div>
  );
};

export default QuestionSection;
