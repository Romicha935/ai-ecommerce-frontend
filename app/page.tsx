import Navbar from "./component/layout/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <h1 className="text-4xl font-bold text-slate-900">
            Shop Smarter with AI
          </h1>
        </section>
      </main>
    </>
  );
}