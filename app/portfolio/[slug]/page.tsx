import projects from "@/app/data/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-md object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400 text-sm">{project.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
