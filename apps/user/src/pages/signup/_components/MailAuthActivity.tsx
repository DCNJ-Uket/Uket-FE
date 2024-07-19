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

import { EmailInfo } from "@/types/emailType";

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

interface MailAuthParams extends ActivityParams, Pick<EmailInfo, "email"> {}

// TODO: 에러 표시하는 방식 변경
const MailAuthActivity: ActivityComponentType<MailAuthParams> = ({
  params,
}) => {
  const { form, email } = params;
  const { onSubmit } = useStackForm();
  const { emailAuthInfo } = useEmailAuthStore();

  const { expiration, formatTime, resetTimer } = useTimer(
    emailAuthInfo?.expiration,
  );

  const authCode = useWatch({
    control: form.control,
    name: "userEmailAuth",
  });

  const { mutateAsync: requestEmailAuth } = useMutationRequestEmailAuth({
    email: email!,
    universityId: form.getValues("userUniv.univId"),
  });

  const {
    mutateAsync: verifyEmailAuth,
    isSuccess: isAuthSuccess,
    error,
    reset,
  } = useMutationVerifyEmailAuth({
    email: email!,
    universityId: form.getValues("userUniv.univId"),
    authCode: authCode!,
  });

  const handleVerify = async () => {
    await verifyEmailAuth();
  };

  const handleRequestAuth = async (resetField: () => void) => {
    reset();
    resetField();
    resetTimer();
    await requestEmailAuth();
  };

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>{email}로</p>
              <p className="flex flex-col">
                <span>보낸 메일에 적힌 숫자를 </span>
                <span>입력해 주세요.</span>
              </p>
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
                              className="border border-[#D9D9D9] py-6 placeholder:font-light placeholder:text-[#8989A1]"
                              value={field.value || ""}
                              disabled={isAuthSuccess}
                            />
                            <aside className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-3 font-light">
                              <div className="text-error">
                                {!isAuthSuccess && formatTime(expiration)}
                              </div>
                              <Button
                                type="button"
                                className="bg-brand hover:bg-brandHover h-8 w-12"
                                onClick={handleVerify}
                                disabled={isAuthSuccess}
                              >
                                인증
                              </Button>
                            </aside>
                          </div>
                        </FormControl>
                        {error && (
                          <FormMessage className="text-error pl-2 text-xs">
                            인증번호가 일치하지 않습니다.
                          </FormMessage>
                        )}
                        {isAuthSuccess && (
                          <span className="text-brand pl-2 text-xs">
                            인증되었습니다!
                          </span>
                        )}
                        <aside className="mt-3 flex items-center justify-center text-sm">
                          <div className="flex items-center gap-2 text-xs text-[#8989A1]">
                            <span>메일이 오지 않았나요?</span>
                            <Button
                              type="button"
                              variant="link"
                              className="px-2 text-xs font-medium text-[#8989A1] underline hover:bg-slate-100"
                              onClick={() =>
                                handleRequestAuth(() => {
                                  form.resetField("userEmailAuth");
                                })
                              }
                              disabled={isAuthSuccess}
                            >
                              다시 보내기
                            </Button>
                          </div>
                        </aside>
                      </FormItem>
                    </div>
                    <ActivityFooter>
                      <NextStepButton
                        type="submit"
                        activityName={"CompleteActivity" as never}
                        disabled={!isAuthSuccess}
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
