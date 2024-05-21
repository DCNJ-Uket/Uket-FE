import { cn } from "@uket/ui/lib/utils";

import Icon from "@/components/Icon";

interface UserTypeItemProps {
  title: string;
  desc: string;
  selected: boolean;
  isUnivUser?: boolean;
}

const UserTypeItem = (props: UserTypeItemProps) => {
  const { title, desc, selected, isUnivUser } = props;
  const iconId = isUnivUser ? "univ_user" : "default_user";

  return (
    <div className="flex h-60 flex-col justify-between gap-2 overflow-hidden rounded-lg shadow-lg">
      <section
        className={cn(
          "flex aspect-square grow justify-center bg-[#f2f2f2] px-5 transition-colors duration-300",
          selected ? "bg-brand/50" : "",
        )}
      >
        <Icon
          id={iconId}
          size={110}
          className={cn(
            "self-end text-[#D9D9D9] transition-colors duration-300",
            selected ? "text-brand" : "",
          )}
        />
      </section>
      <section className="flex flex-col justify-center gap-2 bg-white p-3 py-5">
        <h1 className="font-bold">{title}</h1>
        <h2 className="text-gray-500">{desc}</h2>
      </section>
    </div>
  );
};

export default UserTypeItem;
