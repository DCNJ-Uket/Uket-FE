import { useState } from "react";

import { Button } from "@/components/ui/button";

import UnivItem from "./_components/UnivItem";

import { useNavigate } from "@/router";
import { cn } from "@/lib/utils";

// TODO: 대학교 목록 API 연결 & 선택한 대학교 정보 POST API 요청 로직 버튼에 추가
const SelectUnivPage = () => {
  const [selectedUniv, setSelectedUniv] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleSelectUniv = (index: number) => {
    setSelectedUniv(index);
  };

  const handleNavigate = () => {
    if (!selectedUniv) return;
    navigate("/home");
  };

  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="container flex overflow-y-scroll flex-col gap-10 mt-7 w-full h-full">
        <header className="text-[27px] font-bold">
          <p>참여하고자 하는</p>
          <p>축제가 열리는</p>
          <p>학교를 선택해 주세요.</p>
        </header>
        <section className="grid grid-cols-3 auto-rows-fr gap-3 grow md:grid-cols-6">
          {Array.from({ length: 14 }).map((_, index) => (
            <UnivItem
              key={index}
              selected={selectedUniv === index}
              onSelect={() => handleSelectUniv(index)}
            />
          ))}
        </section>
      </main>
      <footer className="container flex sticky bottom-5 flex-col justify-center items-center w-full">
        <Button
          className={cn(
            "w-full rounded-xl bg-formInput p-6 text-base font-black text-buttonDisabled hover:bg-formInput sm:w-80",
            selectedUniv && "bg-brand text-white hover:bg-brand/80",
          )}
          onClick={handleNavigate}
        >
          다음으로
        </Button>
      </footer>
    </main>
  );
};

export default SelectUnivPage;
