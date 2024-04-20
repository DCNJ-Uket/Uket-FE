import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { validate } from "../_utils/vaildate";
import { ActivityParams } from "../_hooks/useStackForm";
import NextStepButton from "./NextStepButton";

interface NameParmas extends ActivityParams {}

const NameActivity: ActivityComponentType<NameParmas> = ({ params }) => {
  const { form } = params;

  return (
    <AppScreen appBar={{ border: false }}>
      <main className="flex flex-col items-center h-full">
        <section className="flex flex-col gap-10 justify-center w-full grow">
          <header className="container flex flex-col gap-3 justify-end w-full grow">
            <h1 className="text-xl font-bold">
              <p>입금자명 확인을 위해</p>
              <p>성함을 입력해주세요</p>
            </h1>
            <h2 className="text-[#B6B7B8]">예금주명과 동일하게 작성해주세요</h2>
          </header>
          <section className="grow">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <div className="flex flex-col justify-between h-full">
                  <FormItem className="container">
                    <FormControl>
                      <Input
                        placeholder="예금주명을 입력하세요"
                        className="border-2 border-black"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <NextStepButton
                    activityName={"PhoneActivity" as never}
                    params={{ form }}
                    disabled={
                      !validate({
                        type: "name",
                        value: field.value,
                      })
                    }
                  />
                </div>
              )}
            />
          </section>
        </section>
      </main>
    </AppScreen>
  );
};

export default NameActivity;
