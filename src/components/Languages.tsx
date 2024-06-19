export default function Languages() {
  const cardItem =
    "rounded border bg-gradient-to-br from-white to-gray-50 p-5 text-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg  dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75";

  return (
    <section className="mx-auto">
      <div className="pb-5">
        <h1 className="text-3xl font-medium dark:text-white">
          Techonologies I use :
        </h1>
      </div>
      <ol className="grid w-full list-none grid-cols-2 gap-4 place-self-center text-lg text-gray-500 dark:text-gray-400 sm:grid-cols-4">
        {/* js */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/javascript.png"
              alt="javascript"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/javascript.png"
              alt="javascript"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
        {/* ts */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/typescript.png"
              alt="typescript"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/typescript.png"
              alt="typescript"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
        {/* php */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/PHP.png"
              alt="php"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/PHP.png"
              alt="PHP"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>

        {/* tailwind */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/tailwind.png"
              alt="tailwind"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/tailwind.png"
              alt="tailwind"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
        {/* react */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/reactjs.png"
              alt="react"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/react.png"
              alt="react"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
        {/* next */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/next.png"
              alt="tailwind"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/next.png"
              alt="react"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
        {/* laravel */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/Laravel.png"
              alt="laravel"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/Laravel.png"
              alt="laravel"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
        {/* vue */}
        <li className={`${cardItem}`}>
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/vue.png"
              alt="vue"
              className="absolute w-2 opacity-10 blur-md filter md:w-48"
            />
            <img
              src="/img/vue.png"
              alt="vue"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
      </ol>
    </section>
  );
}
