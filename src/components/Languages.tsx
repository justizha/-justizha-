export default function Languages() {
  return (
    <section className="mx-auto">
      <ol className="grid w-full list-none grid-cols-2 gap-4 text-lg text-gray-500 dark:text-gray-400 sm:grid-cols-4">
        {/* js */}
        <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg  dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/javascript.png"
              alt="javascript"
              className="absolute w-2 opacity-10 blur-md filter md:w-56"
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
        <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg  dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/typescript.png"
              alt="php"
              className="absolute w-2 opacity-10 blur-md filter md:w-56"
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
        <li className="hover:shadow-l g rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl transition duration-200 hover:-translate-y-1 dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/php.png"
              alt="php"
              className="absolute w-2 opacity-10 blur-md filter md:w-56"
            />
            <img
              src="/img/php.png"
              alt="php"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>

        {/* tailwind */}
        <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg  dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/tailwind.png"
              alt="tailwind"
              className="absolute w-2 opacity-10 blur-md filter md:w-56"
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
        <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg  dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/reactjs.png"
              alt="tailwind"
              className="absolute w-2 opacity-10 blur-md filter md:w-56"
            />
            <img
              src="/img/reactjs.png"
              alt="react"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
        {/* next */}
        <li className="hover:shadow-l g transit200 rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl duration-200 hover:-translate-y-1 dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/next.png"
              alt="tailwind"
              className="absolute w-2 opacity-10 blur-md filter md:w-56"
            />
            <img
              src="/img/next.png"
              alt="react"
              className="w-20 md:w-36"
              loading="lazy"
            />
          </div>
        </li>
      </ol>
    </section>
  );
}
