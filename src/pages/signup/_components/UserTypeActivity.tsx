import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { validate } from "../_utils/vaildate";
import { useStackForm } from "../_hooks/useStackForm";
import UserTypeItem from "./UserTypeItem";
import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

const UserTypeActivity: ActivityComponentType = () => {
  const { form } = useStackForm();

  return (
    <AppScreen
      appBar={{
        border: false,
      }}
    >
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-xl font-bold">
              <p>대학생인가요?</p>
              <p>일반인인가요?</p>
            </h1>
          </ActivityHeader>
          <section className="grow">
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <div className="flex flex-col justify-between h-full">
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col justify-center items-center space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="univ"
                              isCircleVisible={false}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <UserTypeItem
                              title="대학생"
                              desc="소속 학교가 있는 대학생이에요"
                              selected={field.value === "univ"}
                            />
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="no_univ"
                              isCircleVisible={false}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <UserTypeItem
                              title="일반인"
                              desc="소속 학교가 없는 일반인이에요"
                              selected={field.value === "no_univ"}
                            />
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <ActivityFooter>
                    <NextStepButton
                      activityName={"NameActivity" as never}
                      params={{ form }}
                      disabled={
                        !validate({
                          type: "type",
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

export default UserTypeActivity;
