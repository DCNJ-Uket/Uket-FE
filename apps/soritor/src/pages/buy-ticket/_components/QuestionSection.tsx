import { Textarea } from "@uket/ui/components/ui/textarea";
import { Input } from "@uket/ui/components/ui/input";

const QuestionSection = () => {
  return (
    <div className="flex grow flex-col justify-start gap-4 px-[22px]">
      <section className="flex flex-col gap-2 rounded-lg bg-white px-5 py-5 pt-4 shadow-lg">
        <h1 className="text-[15px] font-bold">
          Q1. 어떤 공연자의 지인분이신가요?
        </h1>
        <Input isLeftIcon placeholder="지인검색" />
      </section>
      <section className="flex flex-col gap-2 rounded-lg bg-white px-5 py-5 pt-4 shadow-lg">
        <h1 className="text-[15px] font-bold">
          Q2. 공연 중 진행되는 라디오에 보낼 사연을
          <br />
          미리 제출해 주세요.
        </h1>
        <Textarea placeholder="사연쓰기" />
      </section>
    </div>
  );
};

export default QuestionSection;
