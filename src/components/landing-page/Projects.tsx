import clsx from "clsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Image from "next/image"

//styles
//--------------------------------------------------------------------//

const headerTitleStyles = clsx(
  "text-4xl",
  "md:text-4xl",
  "lg:text-5xl",
  "font-bold",
  "bg-gradient-to-r from-green-500 to-blue-600",
  "bg-clip-text",
  "text-transparent",
  "text-center"
)

//projects data
//--------------------------------------------------------------------//

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: "/images/anime.jpg",
    projectUrl: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: "/images/anime_2.jpg",
    projectUrl: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    imageUrl: "/images/anime_logo.jpg",
    projectUrl: "https://example.com/project-three",
  },
  {
    title: "Project Four",
    description: "Description for project four.",
    imageUrl: "/images/anime_logo.jpg",
    projectUrl: "https://example.com/project-four",
  },
  {
    title: "Project Five",
    description: "Description for project four.",
    imageUrl: "/images/anime_logo.jpg",
    projectUrl: "https://example.com/project-four",
  }
]

//component
//--------------------------------------------------------------------//

export default function Projects() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto mt-10">
      <h2 className={headerTitleStyles}>My Projects</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10 grid-cols-1 ">
        {projects.map(projects => (
          <Card key={projects.title} className="hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle>{projects.title}</CardTitle>
              <CardDescription>{projects.description}</CardDescription>
              <CardContent>
                <Image
                  src={projects.imageUrl}
                  alt={projects.title}
                  width={400}
                  height={200}
                  className="rounded-md mt-4"
                />
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
