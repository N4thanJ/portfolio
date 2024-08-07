"use client";

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center h-dvh">
        <div className="shadow-[0_0_8px_8px_rgba(0,0,0,.2)] rounded-2xl px-10 pt-20 pb-10 w-1/3 bg-primary">
          <h1 className="uppercase font-black pb-10 text-3xl text-center text-secondary tracking-widest">
            Admin Portal
          </h1>
          <form action="" className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              required
              className="valid:border-green invalid:border-red focus:outline-none mb-4 mt-1 border-l-4 py-2 px-3 bg-lightgray text-black"
              placeholder="Enter your username..."
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              className="valid:border-green invalid:border-red focus:outline-none mb-8 mt-1 border-l-4 py-2 px-3 bg-lightgray text-black"
              placeholder="Enter your password..."
            />

            <button
              type="submit"
              className="border-secondary border-4 text-secondary hover:bg-secondary hover:text-white py-2 font-extrabold rounded-full w-1/3 m-auto transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
