import { Link } from "@/router";

const NotFoundPage = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h1 className="text-xl font-bold">올바르지 않은 접근입니다.</h1>
      <Link to="/" className="underline underline-offset-4 text-[#4c4c4c]">
        홈 화면으로
      </Link>
    </section>
  );
};

export default NotFoundPage;
