import React from "react";

import { cn } from "@/lib/utils";

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
    <main className="flex h-full flex-col items-center overflow-y-scroll bg-[#F2F2F2] px-[22px] pb-6 pt-8">
      <section
        className={cn(
          "flex w-full grow flex-col justify-center gap-4",
          className,
        )}
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
  return <footer className={cn("sticky bottom-0", className)} {...props} />;
};
ActivityFooter.displayName = "ActivityFooter";

const Activity = ({ children }: { children: React.ReactNode }) => {
  return children;
};
Activity.displayName = "Activity";

export { ActivityHeader, ActivityContent, ActivityFooter, Activity };
