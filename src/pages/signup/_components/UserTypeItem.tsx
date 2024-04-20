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
        `flex flex-col items-center gap-2 rounded-md px-5 pb-5 pt-3 transition-colors duration-300`,
        `${selected ? "bg-brand/50" : "bg-[#d7d7d7]"}`,
      )}
    >
      <header>{title}</header>
      <section className="flex gap-5 justify-evenly items-center">
        <Skeleton className="w-20 h-20 rounded-full" />
        <aside>{desc}</aside>
      </section>
    </div>
  );
};

export default UserTypeItem;
