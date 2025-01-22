import { Link } from "react-router-dom";
import { useState } from "react";
import { TermAgreedParams } from "@uket/api/types/term";
import { useMutationAgreeTerm } from "@uket/api/mutations/useMutationAgreeTerm";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen, IconBack } from "@stackflow/plugin-basic-ui";

import TermErrorFallback from "@/components/fallback/TermErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";



import TermSection from "./TermSection";
import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface TermParams extends ActivityParams {}

const TermActivity: ActivityComponentType<TermParams> = () => {
  const { mutateAsync: agreeTerm } = useMutationAgreeTerm();
  const [agreements, setAgreements] = useState<TermAgreedParams[]>([]);

  const handleToggleAgreement = ({ termId, isAgreed }: TermAgreedParams) => {
    setAgreements(prev => {
      const existingIndex = prev.findIndex(item => item.termId === termId);
      if (existingIndex >= 0) {
        // 기존 항목이 있으면 해당 항목만 업데이트
        const newAgreements = [...prev];
        newAgreements[existingIndex] = { termId, isAgreed };
        return newAgreements;
      }
      // 기존 항목이 없으면 새로 추가
      return [...prev, { termId, isAgreed }];
    });
  };

  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        renderLeft: () => (
          <Link to={"/login"} className="px-1.5">
            <IconBack />
          </Link>
        ),
      }}
    >
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>티켓팅 경험 개선을 위해</p>
              <p>아래 약관의 동의가 필요합니다.</p>
            </h1>
          </ActivityHeader>
          <RetryErrorBoundary fallbackComponent={TermErrorFallback}>
            <TermSection onToggle={handleToggleAgreement} />
          </RetryErrorBoundary>
          <ActivityFooter>
            <NextStepButton
              activityName={"NameActivity" as never}
              mutate={() => agreeTerm(agreements)}
              disabled={
                agreements.length !== 2 ||
                agreements?.some(agreement => !agreement.isAgreed)
              }
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default TermActivity;
