import { Link } from "@/router";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col gap-3 justify-center items-center w-full h-full">
      <h1 className="text-7xl font-bold">404 Error</h1>
      <Link to="/" className="p-3 rounded-lg border hover:bg-slate-100">Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;
