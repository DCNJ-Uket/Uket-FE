import { useMemo } from "react";
import { Input } from "@uket/ui/components/ui/input";
import { FormControl, FormField, FormItem } from "@uket/ui/components/ui/form";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { validateForm } from "../../../utils/vaildateForm";
import { useStackForm } from "../../../hooks/useStackForm";
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
              <p>전화번호를 입력해 주세요.</p>
            </h1>
            <h2 className="text-desc">
              <p>하이픈(-) 없이 숫자로만 입력해 주세요.</p>
            </h2>
          </ActivityHeader>
          <section className="grow">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex h-full flex-col justify-between"
            >
              <FormField
                control={form.control}
                name="userPhone"
                render={({ field }) => (
                  <div className="flex h-full flex-col justify-between">
                    <FormItem className="container">
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="e.g. 01012345678"
                          className="border-formInput border placeholder:font-light placeholder:text-[#8989A1]"
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
                          !validateForm({
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
