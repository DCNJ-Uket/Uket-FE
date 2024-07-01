import { useWatch } from "react-hook-form";
import { Input } from "@uket/ui/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@uket/ui/components/ui/form";
import { Button } from "@uket/ui/components/ui/button";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useTimer } from "@/hooks/useTimer";
import { useMutationVerifyEmailAuth } from "@/hooks/mutations/useMutationVerifyEmailAuth";
import { useMutationRequestEmailAuth } from "@/hooks/mutations/useMutationRequestEmailAuth";

import { useStackForm } from "../../../hooks/useStackForm";
import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

import { useEmailAuthStore } from "@/store/useEmailAuthStore";

interface MailAuthParams extends ActivityParams {
  email: string;
}

// TODO: 에러 표시하는 방식 변경 & universityId 변경
const MailAuthActivity: ActivityComponentType<MailAuthParams> = ({
  params,
}) => {
  const { form, email } = params;
  const { onSubmit } = useStackForm();
  const { emailAuthInfo } = useEmailAuthStore();
  const { expiration, formatTime } = useTimer(emailAuthInfo?.expiration);
  const authCode = useWatch({
    control: form.control,
    name: "userEmailAuth",
  });

  const { mutate: requestEmailAuth } = useMutationRequestEmailAuth({
    email: email!,
    universityId: 2,
  });

  const {
    mutateAsync: verifyEmailAuth,
    error,
    isPending,
  } = useMutationVerifyEmailAuth({
    email: email!,
    universityId: 2,
    authCode: authCode!,
  });

  return (
    <AppScreen appBar={{ border: false }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>{email}로</p>
              <p>보낸 메일에 적힌 숫자를 입력해 주세요</p>
            </h1>
          </ActivityHeader>
          <section className="grow">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex h-full flex-col justify-between"
            >
              <FormField
                control={form.control}
                name="userEmailAuth"
                render={({ field }) => (
                  <>
                    <div className="container">
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              autoComplete="off"
                              placeholder="인증 번호 입력하기"
                              className="border border-[#D9D9D9] placeholder:text-[#8989A1] placeholder:font-light"
                              value={field.value || ""}
                              autoFocus
                            />
                            <div className="text-error absolute right-4 top-1/2 -translate-y-1/2 font-light">
                              {formatTime(expiration)}
                            </div>
                          </div>
                        </FormControl>
                        {error && (
                          <FormMessage className="text-error text-xs">
                            인증번호가 일치하지 않습니다.
                          </FormMessage>
                        )}
                      </FormItem>
                      <aside className="mt-3 flex items-center justify-center text-sm">
                        <div className="flex items-center gap-2 text-xs text-[#8989A1]">
                          <span>메일이 오지 않았나요?</span>
                          <Button
                            variant="link"
                            className="p-0 text-xs font-medium underline"
                            onClick={() => requestEmailAuth()}
                          >
                            다시 보내기
                          </Button>
                        </div>
                      </aside>
                    </div>
                    <ActivityFooter>
                      <NextStepButton
                        type="submit"
                        activityName={"CompleteActivity" as never}
                        disabled={false}
                        mutate={verifyEmailAuth}
                        isLoading={isPending}
                      />
                    </ActivityFooter>
                  </>
                )}
              />
            </form>
          </section>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default MailAuthActivity;
