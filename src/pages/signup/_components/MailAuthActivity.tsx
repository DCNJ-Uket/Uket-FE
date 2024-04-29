import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { ActivityParams, useStackForm } from "../_hooks/useStackForm";
import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

interface MailAuthParams extends ActivityParams {
  email: string;
}

// TODO: 메일 인증 로직 & 다음 Stack 로직 추가
const MailAuthActivity: ActivityComponentType<MailAuthParams> = ({
  params,
}) => {
  const { form, email } = params;
  const { onSubmit } = useStackForm();

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
              className="flex flex-col justify-between h-full"
            >
              <FormField
                control={form.control}
                name="userEmailAuth"
                render={({ field }) => (
                  <>
                    <div className="container">
                      <FormItem>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            placeholder="인증 번호 입력하기"
                            className="border-2 border-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      <aside className="flex justify-between items-center m-0 text-sm">
                        <div>2:32</div>
                        <div className="flex gap-2 items-center text-xs">
                          <span>메일이 오지 않았나요?</span>
                          <Button
                            variant="link"
                            className="p-0 text-xs text-[#7B7B7B]"
                          >
                            다시 보내기
                          </Button>
                        </div>
                      </aside>
                    </div>
                    <ActivityFooter>
                      <NextStepButton
                        activityName={"CompleteActivity" as never}
                        disabled={false}
                      />
                    </ActivityFooter>
                  </>
                )}
              />
              <Button type="submit">Click</Button>
            </form>
          </section>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default MailAuthActivity;
