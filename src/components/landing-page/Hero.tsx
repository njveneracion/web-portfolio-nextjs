import clsx from 'clsx';
import { Button } from "@/components/ui/button";
import { GridPattern } from '../ui/shadcn-io/grid-pattern';
import { cn } from '@/lib/utils';

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
  'text-center'
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
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
      <h1 className={headlineStyles}>
        Hello, I'm a Full Stack Developer
      </h1>
      <p className="max-w-xl text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus error quod esse minus aliquam blanditiis asperiores
        inventore voluptate reprehenderit, obcaecati dolor. Culpa
        excepturi commodi a beatae, eaque nemo ipsa aliquid!
      </p>
      <Button size="lg">Get in Touch</Button>
    </section>
  )
}