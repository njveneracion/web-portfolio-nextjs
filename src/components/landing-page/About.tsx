"use client";
import clsx from 'clsx';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

//styles
//--------------------------------------------------------------------//

const headlineStyles = clsx(
  'font-bold',
  'text-4xl',
  'md:text-4xl',
  'lg:text-5xl',
  'text-center',
  'mb-6',
  'bg-gradient-to-r',
  'from-green-500',
  'to-blue-600',
  'bg-clip-text',
  'text-transparent'
);

const textStyles = clsx(
  'bg-gradient-to-r',
  'from-green-500',
  'to-blue-600',
  'bg-clip-text',
  'text-transparent',
  'font-semibold',
  'text-3xl',
  'mb-2',
  'font-bold'
);

const cardContentStyles = clsx(
  'flex',
  'aspect-square',
  'items-center',
  'justify-center',
  'p-6'
);

//data
//--------------------------------------------------------------------//

//images for the About section
const images = [
  { src: "/images/about/photo1.jpg", alt: "About Image 1" },
  { src: "/images/about/photo2.jpg", alt: "About Image 2" },
  { src: "/images/about/photo3.jpg", alt: "About Image 3" },
  { src: "/images/about/photo4.jpg", alt: "About Image 4" },
];

//work experience

const workExperience = [
  {
    position: "Web Developer Intern",
    company: "Shoppable Business",
    duration: "August - November 2025",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with the design team to implement user-friendly interfaces."
  },
  {
    position: "Software Quality Assurance Intern",
    company: "Seven365 Inc.",
    duration: "January - May 2025",
    description: "Assisted in testing web applications, reporting bugs, and ensuring software quality."
  }
]

//--------------------------------------------------------------------//

export default function About() {

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto relative">
      <h2 className={headlineStyles}>About Me</h2>
      <p className="text-lg max-w-3xl mx-auto text-center">
        I&#39;m a developer that is enthusiast with many things,
        I love creating beautiful and functional web applications.
        With a strong attention to detail and a passion for user
        experience, I treat my code as an art so expect a clean
        and efficient codebase. When I&#39;m not coding, you can
        find me in nature taking photos, traveling to new places,
        or reading books to expand my knowledge.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-13 md:grid-cols-2">
        {/* Image Gallery */}
        <Carousel>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.src}>
                <Card>
                  <CardContent className={cardContentStyles}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full rounded"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Information about me */}
        <div className="flex flex-col justify-center ms-10">
          {/* Work Experience */}
          <div className="mb-8">
            <h3 className={textStyles}>Work Experience</h3>
            <ul className="">
              {workExperience.map(work => (
                <li key={work.position}>
                  <strong>{work.position}</strong> at {work.company}
                  <br />
                  ({work.duration})
                  <br />
                  {work.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills & Technologies */}
          <div className="mb-8">
            <h3 className={textStyles}>Skills & Technologies</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>JavaScript, TypeScript, React, Next.js</li>
              <li>Node.js, Express, MongoDB</li>
              <li>HTML5, CSS3, Tailwind CSS</li>
              <li>Git, GitHub</li>
            </ul>
          </div>

          {/* Hobby */}
          <div>
            <h3 className={textStyles}>Hobbies</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Photography</li>
              <li>Traveling</li>
              <li>Reading</li>
              <li>Coding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
