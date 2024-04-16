import { Skeleton } from "@/components/ui/skeleton";

interface ChooseItemProps {
  title: string;
  desc: string;
}

const ChooseItem = (props: ChooseItemProps) => {
  const { title, desc } = props;
  return (
    <div className="flex flex-col items-center gap-2 bg-[#d7d7d7] px-5 pb-5 pt-3">
      <header>{title}</header>
      <section className="flex gap-5 justify-evenly items-center">
        <Skeleton className="w-20 h-20 rounded-full" />
        <aside>{desc}</aside>
      </section>
    </div>
  );
};

export default ChooseItem;
