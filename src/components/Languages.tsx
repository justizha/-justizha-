export default function Languages() {
  return (
    <section className="mx-auto">
      <div className="pb-8">
        <h1 className="text-3xl font-medium dark:text-white">
          Techonologies I use :
        </h1>
      </div>
      <ol className="grid w-full list-none grid-cols-4 gap-4 place-self-center text-lg text-gray-500 dark:text-gray-400 sm:grid-cols-8">
        {/* js */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/javascript.png"
              alt="javascript"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/javascript.png"
              alt="javascript"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>
        {/* ts */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/typescript.png"
              alt="typescript"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/typescript.png"
              alt="typescript"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>
        {/* php */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/PHP.png"
              alt="php"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/PHP.png"
              alt="PHP"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>

        {/* tailwind */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/tailwind.png"
              alt="tailwind"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/tailwind.png"
              alt="tailwind"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>
        {/* react */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/reactjs.png"
              alt="react"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/react.png"
              alt="react"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>
        {/* next */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/next.png"
              alt="tailwind"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/next.png"
              alt="react"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>
        {/* laravel */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/Laravel.png"
              alt="laravel"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/Laravel.png"
              alt="laravel"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>
        {/* vue */}
        <li className="">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <img
              src="/img/vue.png"
              alt="vue"
              className="absolute w-20 opacity-15 blur-md filter md:w-24"
            />
            <img
              src="/img/vue.png"
              alt="vue"
              className="w-14 md:w-20"
              loading="lazy"
            />
          </div>
        </li>
      </ol>
    </section>
  );
}
