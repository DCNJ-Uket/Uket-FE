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
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

interface MailParams extends ActivityParams {}

const MailActivity: ActivityComponentType<MailParams> = ({ params }) => {
  const { form } = params;

  return (
    <AppScreen appBar={{ border: false }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-xl font-bold">
              <p>학생 인증을 위해</p>
              <p>학교 메일 인증이 필요해요</p>
            </h1>
          </ActivityHeader>
          <section className="grow">
            <FormField
              control={form.control}
              name="userEmail"
              render={({ field }) => (
                <div className="flex flex-col justify-between h-full">
                  <FormItem className="container">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="학교 메일 주소 입력하기"
                        className="border-2 border-black"
                        {...field}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <ActivityFooter>
                    <NextStepButton
                      activityName={"MailAuthActivity" as never}
                      params={{
                        email: field.value,
                        form,
                      }}
                      disabled={
                        !validate({
                          type: "email",
                          value: field.value,
                        })
                      }
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
