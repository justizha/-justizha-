export default function Contact() {
  return (
    <section className="py-24">
      <div className="pt-8">
        <h1 className="text-3xl font-bold">Contact.</h1>
        <h2 className="text-lg">Get to know me !</h2>
      </div>
      <form action="POST" className="my-2" autoComplete="off">
        <div className="mb-4">
          <input
            placeholder="Your name"
            type="text"
            name="name"
            id="name"
            className="w-full rounded-md border border-indigo-500 bg-transparent p-2 shadow focus:outline-none focus:ring-1  focus:ring-indigo-400 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Your e-mail"
            type="email"
            name="email"
            id="email"
            className="w-full rounded-md border border-indigo-500 bg-transparent p-2 shadow focus:outline-none focus:ring-1  focus:ring-indigo-400 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your message"
            name="message"
            id="message"
            className="w-full rounded-md border border-indigo-500 bg-transparent p-2 shadow focus:outline-none focus:ring-1  focus:ring-indigo-400 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full rounded-md bg-indigo-600 p-2 text-lg  text-white shadow-md hover:bg-indigo-500 "
          >
            Send !
          </button>
        </div>
      </form>
    </section>
  );
}
