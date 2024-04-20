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
      <main className="flex flex-col items-center h-full">
        <section className="flex flex-col gap-10 justify-center w-full grow">
          <header className="container flex flex-col gap-3 justify-end w-full grow">
            <h1 className="text-xl font-bold">
              <p>{email}로</p>
              <p>보낸 메일에 적힌 숫자를 입력해 주세요</p>
            </h1>
          </header>
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
                    <NextStepButton
                      activityName={"CompleteActivity" as never}
                      disabled={false}
                    />
                  </>
                )}
              />
              <Button type="submit">Click</Button>
            </form>
          </section>
        </section>
      </main>
    </AppScreen>
  );
};

export default MailAuthActivity;
