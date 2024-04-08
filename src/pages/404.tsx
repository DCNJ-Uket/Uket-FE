import { Link } from "@/router";

const NotFoundPage = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h1 className="text-7xl font-bold">404 Error</h1>
      <Link to="/" className="border rounded-lg p-3 hover:bg-slate-100">Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;
