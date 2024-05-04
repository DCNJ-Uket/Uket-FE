import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

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

const MailActivity: ActivityComponentType<MailParams> = ({ params }) => {
  const { form } = params;

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
                <div className="flex flex-col justify-between h-full">
                  <FormItem className="container">
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="학교 메일 주소 입력하기"
                        className="border border-formInput"
                        value={field.value || ""}
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
                        !validateForm({
                          type: "email",
                          value: field.value || "",
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
