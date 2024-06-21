"use client";

export default function ToTopButton() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="fixed bottom-5 right-7 flex h-12 w-12 items-center  justify-center rounded-full bg-indigo-200 shadow dark:bg-indigo-900"
      onClick={ScrollToTop}
      aria-label="to top"
    >
      <i className="">🚀</i>
    </button>
  );
}
