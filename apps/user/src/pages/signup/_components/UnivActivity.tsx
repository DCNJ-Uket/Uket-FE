import { FallbackProps } from "react-error-boundary";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import SelectErrorFallback from "@/components/fallback/SelectErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import UserIdField from "./UserIdField";
import UnivField from "./UnivField";
import NoUnivModal from "./NoUnivModal";
import NextStepButton from "./NextStepButton";
import MajorField from "./MajorField";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface UnivParams extends ActivityParams {}

// TODO: 버튼 비활성화 로직 추가
const UnivActivity: ActivityComponentType<UnivParams> = ({ params }) => {
  const { form } = params;

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent className="gap-10">
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>학교와 학과, 학번을</p>
              <p>입력해 주세요.</p>
            </h1>
          </ActivityHeader>
          <section className="container flex grow flex-col gap-3">
            <RetryErrorBoundary
              resetKeys={["university-list"]}
              fallbackComponent={(props: FallbackProps) => (
                <SelectErrorFallback title="학교 불러오기" {...props} />
              )}
            >
              <UnivField form={form} />
            </RetryErrorBoundary>
            <MajorField form={form} />
            <UserIdField form={form} />
            <footer className="mt-5 text-center">
              <NoUnivModal form={form} />
            </footer>
          </section>
          <ActivityFooter className="w-full">
            <NextStepButton
              activityName={"MailActivity" as never}
              params={{ form }}
              disabled={false}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default UnivActivity;
