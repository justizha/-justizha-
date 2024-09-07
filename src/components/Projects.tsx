import Link from "next/link";
import getProjects from "@/app/api/main";

export default async function Projects() {
  const projects =  await getProjects();
  return (
    <section className="relative py-24">
      <div className="pb-8">
        <h1 className="text-3xl font-medium dark:text-white">
          Some Notable Projects
        </h1>
      </div>
      <article className="grid gap-2 md:grid-cols-2">
        {projects.map((project: any) => (
          <div
            className="min-h-40 w-full max-w-md rounded-md bg-indigo-100 px-3 py-2 duration-300 hover:scale-105 dark:bg-indigo-950"
            key={project.id}
          >
            <div className="rounded-lg">
              <div className="flex flex-col space-y-4">
                <Link
                  href={project.html_url}
                  className="text-xl font-semibold text-gray-800 underline dark:text-indigo-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.full_name}
                </Link>
                <p className="text-sm text-gray-600 dark:text-indigo-100">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <p className="text-base text-gray-700 dark:text-indigo-100">
                  {project.language}
                </p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
