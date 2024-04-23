export default function Languages() {
  return (
    <section className="mx-auto">
      <div className="flex-none gap-8 md:flex">
        <div>
          <h1>Some Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            repellendus.
          </p>
        </div>
        <ol className="grid aspect-square max-w-md grid-cols-2 gap-3">
          {/* html */}
          <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl duration-200 hover:shadow-lg dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <img
                src="/img/html.png"
                alt="html"
                className="absolute w-24 opacity-20 blur-md filter md:w-56"
              />
              <img
                src="/img/html.png"
                alt="html"
                className="w-20 md:w-36"
                loading="lazy"
              />
            </div>
          </li>
          {/* css */}
          <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl duration-200 hover:shadow-lg dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <img
                src="/img/css.png"
                alt="html"
                className="absolute w-24 opacity-20 blur-md filter md:w-56"
              />
              <img
                src="/img/css.png"
                alt="html"
                className="w-20 md:w-36"
                loading="lazy"
              />
            </div>
          </li>
          {/* js */}
          <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl duration-200 hover:shadow-lg dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <img
                src="/img/javascript.png"
                alt="javascript"
                className="absolute w-24 opacity-20 blur-md filter md:w-56"
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
          <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl duration-200 hover:shadow-lg dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <img
                src="/img/typescript.png"
                alt="php"
                className="absolute w-24 opacity-20 blur-md filter md:w-56"
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
          <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl duration-200 hover:shadow-lg dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <img
                src="/img/php.png"
                alt="php"
                className="absolute w-24 opacity-20 blur-md filter md:w-56"
              />
              <img
                src="/img/php.png"
                alt="php"
                className="w-20 md:w-36"
                loading="lazy"
              />
            </div>
          </li>
          {/* mysql */}
          <li className="rounded-xl border bg-gradient-to-br from-white to-gray-50 p-5 text-xl duration-200 hover:shadow-lg dark:border-gray-700  dark:from-gray-700/75 dark:to-gray-800/75">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <img
                src="/img/mysql.png"
                alt="mysql"
                className="absolute w-24 opacity-20 blur-md filter md:w-56"
              />
              <img
                src="/img/mysql.png"
                alt="mysql"
                className="w-20 md:w-36"
                loading="lazy"
              />
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
