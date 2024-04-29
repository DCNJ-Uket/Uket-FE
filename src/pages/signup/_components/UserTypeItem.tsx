import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

interface UserTypeItemProps {
  title: string;
  desc: string;
  selected: boolean;
}

const UserTypeItem = (props: UserTypeItemProps) => {
  const { title, desc, selected } = props;

  return (
    <div
      className={cn(
        `flex flex-col justify-between gap-2 rounded-lg shadow-lg transition-colors duration-300 h-60 overflow-hidden`,
        `${selected ? "bg-brand/50" : "bg-[#d7d7d7]"}`,
      )}
    >
      <section className="flex gap-5 justify-evenly items-center">
        <Skeleton className="w-20 h-20 rounded-full" />
      </section>
      <section className="flex flex-col gap-2 justify-center p-3 py-5 bg-white">
        <h1 className="font-bold">{title}</h1>
        <h2 className="text-gray-500">{desc}</h2>
      </section>
    </div>
  );
};

export default UserTypeItem;
