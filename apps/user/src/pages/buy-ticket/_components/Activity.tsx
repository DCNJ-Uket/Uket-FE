import React from "react";
import { cn } from "@uket/ui/lib/utils";

import { FormType } from "@/hooks/useTicketStackForm";

export interface ActivityParams {
  form: FormType;
}

const ActivityHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header
      className={cn(
        "container flex w-full grow flex-col gap-[1px] px-1",
        className,
      )}
      {...props}
    />
  );
};
ActivityHeader.displayName = "ActivityHeader";

const ActivityContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className="flex h-full grow flex-col items-center overflow-y-scroll bg-[#F2F2F2]">
      <section
        className={cn("flex w-full grow flex-col justify-between", className)}
        {...props}
      >
        {children}
      </section>
    </main>
  );
};
ActivityContent.displayName = "ActivityContent";

const ActivityFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer className={cn("sticky bottom-0 pt-2", className)} {...props} />
  );
};
ActivityFooter.displayName = "ActivityFooter";

const Activity = ({ children }: { children: React.ReactNode }) => {
  return children;
};
Activity.displayName = "Activity";

export { ActivityHeader, ActivityContent, ActivityFooter, Activity };
