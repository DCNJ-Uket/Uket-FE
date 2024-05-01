import { useMemo } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

import { validate } from "../_utils/vaildate";
import { useStackForm } from "../_hooks/useStackForm";
import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface PhoneParams extends ActivityParams {}

const PhoneActivity: ActivityComponentType<PhoneParams> = ({ params }) => {
  const { form } = params;
  const { onSubmit } = useStackForm();
  const isUnivStudent = useMemo(() => {
    return form.getValues("userType") === "univ";
  }, [form]);

  return (
    <AppScreen appBar={{ border: false }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>전화번호를 입력해 주세요</p>
            </h1>
            <h2 className="text-gray-500">
              <p>하이픈(-)없이 숫자로만 입력해 주세요.</p>
            </h2>
          </ActivityHeader>
          <section className="grow">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-between h-full"
            >
              <FormField
                control={form.control}
                name="userPhone"
                render={({ field }) => (
                  <div className="flex flex-col justify-between h-full">
                    <FormItem className="container">
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="전화번호를 입력해 주세요"
                          className="border border-formInput"
                          autoComplete="off"
                          value={field.value || ""}
                        />
                      </FormControl>
                    </FormItem>
                    <ActivityFooter>
                      <NextStepButton
                        type={isUnivStudent ? "button" : "submit"}
                        activityName={
                          (isUnivStudent
                            ? "UnivActivity"
                            : "CompleteActivity") as never
                        }
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
            </form>
          </section>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default PhoneActivity;
