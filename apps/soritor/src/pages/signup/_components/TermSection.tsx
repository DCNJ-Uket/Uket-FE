import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@uket/ui/components/ui/icon";
import { Checkbox } from "@uket/ui/components/ui/checkbox";

import { useQueryTermList } from "@/hooks/queries/useQueryTermList";

import { TermAgreedParams } from "@/types/termType";

const TERM_NAME = ["개인 정보 제공 동의", "이용 약관 동의"];

interface TermSectionProps {
  onToggle: ({ termId, isAgreed }: TermAgreedParams) => void;
}

const TermSection = (props: TermSectionProps) => {
  const { onToggle } = props;
  const { data } = useQueryTermList();

  return (
    <section className="grow px-9">
      <div className="flex flex-col divide-y-[1px]">
        {data.map((term, index) => (
          <div className="flex items-center gap-4 py-3" key={term.termsId}>
            <Checkbox
              className="text-xl"
              onCheckedChange={checked =>
                onToggle({ termId: term.termsId, isAgreed: checked as boolean })
              }
            />
            <Link
              to={term.link}
              target="_blank"
              className="flex w-full items-center justify-between"
            >
              <div className="font-medium">
                {term.type === "MANDATORY" ? "[필수]" : "[선택]"}{" "}
                {TERM_NAME[index]}
              </div>
              <ChevronRightIcon className="text-desc h-5 w-5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermSection;
