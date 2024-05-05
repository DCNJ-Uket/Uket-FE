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
import Logo from "@/components/Logo";

import { validateForm } from "../../../utils/vaildateForm";
import { useStackForm } from "../../../hooks/useStackForm";
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
        renderLeft: () => <Logo onActivity />,
      }}
    >
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-2xl font-black">
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
                        className="container flex justify-center items-center w-full"
                      >
                        <FormItem className="flex items-center space-y-0">
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
                              isUnivUser
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
                        !validateForm({
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
