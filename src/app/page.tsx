import GithubStat from "../components/GithubStats";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-wider md:text-6xl lg:text-9xl">
            JustIzha
          </h1>
        </div>
        <hr className="my-5" />

        <div className="text-center">
          <p className="text-2xl tracking-wide">Alfath Izha Barikallah</p>
        </div>
      </section>

      <GithubStat />
    </>
  );
}
