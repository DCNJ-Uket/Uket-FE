import { Input } from "@uket/ui/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@uket/ui/components/ui/form";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import SearchSelector from "./SearchSelector";
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
        <ActivityContent className="gap-10">
          <ActivityHeader>
            <h1 className="text-2xl font-black">
              <p>학교와 학과, 학번을</p>
              <p>입력해 주세요</p>
            </h1>
          </ActivityHeader>
          <section className="container flex grow flex-col gap-3">
            <SearchSelector
              form={form}
              formType="userUniv"
              label="학교"
              placeholder="학교 검색"
            />
            <SearchSelector
              form={form}
              formType="userMajor"
              label="학과"
              placeholder="학과 검색"
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
                      placeholder="학번"
                      className="border-formInput border"
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
