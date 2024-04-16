import { Skeleton } from "@/components/ui/skeleton";

interface UserTypeItemProps {
  title: string;
  desc: string;
}

const UserTypeItem = (props: UserTypeItemProps) => {
  const { title, desc } = props;
  return (
    <div className="flex flex-col items-center gap-2 bg-[#d7d7d7] px-5 pb-5 pt-3">
      <header>{title}</header>
      <section className="flex items-center justify-evenly gap-5">
        <Skeleton className="h-20 w-20 rounded-full" />
        <aside>{desc}</aside>
      </section>
    </div>
  );
};

export default UserTypeItem;
