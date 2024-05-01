import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface UnivParams extends ActivityParams {}

// TODO: 버튼 비활성화 로직 추가
const UnivActivity: ActivityComponentType<UnivParams> = ({ params }) => {
  const { form } = params;

  return (
    <AppScreen appBar={{ border: false }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>학교와 학과, 학번을</p>
              <p>입력해 주세요</p>
            </h1>
          </ActivityHeader>
          <section className="container flex flex-col gap-3 grow">
            <FormField
              control={form.control}
              name="userUniv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>학교</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="학교 검색"
                      className="border border-formInput"
                      autoComplete="off"
                      isIcon
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userMajor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>학과</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="학과 검색"
                      className="border border-formInput"
                      autoComplete="off"
                      isIcon
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>학번</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="학번 입력"
                      className="border border-formInput"
                      autoComplete="off"
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <ActivityFooter className="w-full">
            <NextStepButton
              activityName={"MailActivity" as never}
              params={{ form }}
              disabled={false}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default UnivActivity;
