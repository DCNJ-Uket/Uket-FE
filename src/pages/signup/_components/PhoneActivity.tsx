import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

import { validate } from "../_utils/vaildate";
import { ActivityParams } from "../_hooks/useStackForm";
import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

interface PhoneParams extends ActivityParams {}

const PhoneActivity: ActivityComponentType<PhoneParams> = ({ params }) => {
  const { form } = params;

  return (
    <AppScreen appBar={{ border: false }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-xl font-bold">
              <p>전화번호를 입력해 주세요</p>
            </h1>
            <h2 className="text-[#B6B7B8]">
              <p>하이픈(-)없이</p>
              <p>숫자로만 입력해 주세요.</p>
            </h2>
          </ActivityHeader>
          <section className="grow">
            <FormField
              control={form.control}
              name="userPhone"
              render={({ field }) => (
                <div className="flex flex-col justify-between h-full">
                  <FormItem className="container">
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="전화번호를 입력해 주세요"
                        className="border-2 border-black"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                  <ActivityFooter>
                    <NextStepButton
                      activityName={"UnivActivity" as never}
                      params={{ form }}
                      disabled={
                        !validate({
                          type: "phone",
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

export default PhoneActivity;
