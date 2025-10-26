import clsx from 'clsx';
import { Button } from "@/components/ui/button";
import { GridPattern } from '../ui/shadcn-io/grid-pattern';
import { cn } from '@/lib/utils';
import Typewriter from 'typewriter-effect';
import { MdWavingHand } from "react-icons/md";

const typewriterData = [
  "I'm a Full Stack Developer",
  "I build web applications",
  "I treat code as an art",
];

//styles
//--------------------------------------------------------------------//

const sectionStyles = clsx(
  'min-h-screen',
  'flex',
  'flex-col',
  'justify-center',
  'items-center',
  'gap-6',
  'relative'
);

const headlineStyles = clsx(
  'font-bold',
  'min-w-full',
  'text-5xl',
  'md:text-6xl',
  'lg:text-7xl',
  'text-center',
  'z-10',
);

const wrapperClassName = clsx(
  'bg-gradient-to-r',
  'from-blue-500',
  'to-purple-600',
  'bg-clip-text',
  'text-transparent'
);

const ctaStyles = clsx(
  'mt-8',
  'bg-gradient-to-r',
  'from-blue-500',
  'to-purple-600',
  'text-white',
  'hover:from-blue-600',
  'hover:to-purple-700'
);

//--------------------------------------------------------------------//

export default function Hero() {
  return (
    <section className={sectionStyles}>
      <GridPattern
        width={50}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
      <h1 className={headlineStyles}>
        <span>Hello</span>
        <MdWavingHand className="inline mb-3 mx-3 text-yellow-500 animate-pulse" />
        !
        <Typewriter
          options={{
            strings: typewriterData,
            autoStart: true,
            loop: true,
            delay: 50,
            wrapperClassName: wrapperClassName
          }}
        />
      </h1>
      <p className="max-w-xl text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus error quod esse minus aliquam blanditiis asperiores
        inventore voluptate reprehenderit, obcaecati dolor. Culpa
        excepturi commodi a beatae, eaque nemo ipsa aliquid!
      </p>
      <Button className={ctaStyles} size="lg">Get in Touch</Button>
    </section>
  )
}