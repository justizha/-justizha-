async function getProjects() {
  const res = await fetch("https://api.github.com/users/justizha/repos");
  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }
  const response = await res.json();

  if (!Array.isArray(response)) {
    throw new Error("Response is not an array");
  }

  const repo = response.filter((repo) => repo.fork === false);
  return repo;
}

export default async function Projects() {
  const projects = await getProjects();
  return (
    <section className="relative">
      <article className="grid gap-3 md:grid-cols-3">
        {projects.map((project: any) => (
          <div
            className="min-h-72 max-w-md rounded-md bg-indigo-100 px-4 py-2 duration-300 hover:scale-105 dark:bg-indigo-950"
            key={project.id}
          >
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-8">
                <h1 className="text-lg font-medium">{project.full_name}</h1>
                <p className="text-base">{project.description}</p>
              </div>
              <img
                src={`${project.owner.avatar_url}`}
                alt={`${project.owner.login}`}
                className="h-20  w-20 rounded-md"
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
