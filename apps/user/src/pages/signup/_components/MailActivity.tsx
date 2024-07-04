import { useWatch } from "react-hook-form";
import { Input } from "@uket/ui/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@uket/ui/components/ui/form";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useMutationRequestEmailAuth } from "@/hooks/mutations/useMutationRequestEmailAuth";

import { validateForm } from "../../../utils/vaildateForm";
import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface MailParams extends ActivityParams {}

// TODO: 에러 표시하는 방식 변경
const MailActivity: ActivityComponentType<MailParams> = ({ params }) => {
  const { form } = params;

  const email = useWatch({
    control: form.control,
    name: "userEmail",
  });

  const { mutateAsync, error, isPending } = useMutationRequestEmailAuth({
    email: email!,
    universityId: form.getValues("userUniv.univId"),
  });

  return (
    <AppScreen appBar={{ border: false }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>학생 인증을 위해</p>
              <p>학교 메일 인증이 필요해요</p>
            </h1>
          </ActivityHeader>
          <section className="grow">
            <FormField
              control={form.control}
              name="userEmail"
              render={({ field }) => (
                <div className="flex h-full flex-col justify-between">
                  <FormItem className="container">
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="학교 메일 주소 입력하기"
                        className="border-formInput border"
                        value={field.value || ""}
                        autoComplete="off"
                      />
                    </FormControl>
                    {error && (
                      <FormMessage className="text-error text-xs">
                        선택한 학교의 메일이 아니거나 서비스에 등록되지 않은
                        학교입니다.
                      </FormMessage>
                    )}
                  </FormItem>
                  <ActivityFooter>
                    <NextStepButton
                      activityName={"MailAuthActivity" as never}
                      params={{
                        email: field.value,
                        form,
                      }}
                      disabled={
                        !validateForm({
                          type: "email",
                          value: field.value || "",
                        })
                      }
                      mutate={mutateAsync}
                      isLoading={isPending}
                    />
                  </ActivityFooter>
                </div>
              )}
            />
          </section>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default MailActivity;
