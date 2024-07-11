import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className="text-center my-10 text-3xl font-bold">
        Hello I am Learn NextAuth.
      </h1>

      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold text-slate-500 my-2">
          login with credential.
        </p>
        <button className="rounded-full shadow bg-slate-500 active:bg-slate-600 hover:brightness-105 py-1.5 text-white w-32">
          <Link href="/login">Login page</Link>
        </button>
      </div>
    </main>
  );
}
