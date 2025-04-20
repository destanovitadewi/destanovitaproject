import { notFound } from "next/navigation";
import projects from "@/app/data/portfolio";
import Image from "next/image";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400">{project.year}</p>
        <div className="my-6">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
  );
}
