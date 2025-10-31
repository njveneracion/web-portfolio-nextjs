import clsx from 'clsx';
import { Button } from "@/components/ui/button";
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
  'gap-6'
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
  'from-green-500',
  'to-blue-600',
  'bg-clip-text',
  'text-transparent'
);

const ctaStyles = clsx(
  'mt-8',
  'bg-gradient-to-r',
  'from-green-500',
  'to-blue-600',
  'text-white',
  'hover:from-green-600',
  'hover:to-blue-700'
);

const wavingHandStyles = clsx(
  'inline',
  'mb-3',
  'mx-3',
  'text-yellow-500'
);

//--------------------------------------------------------------------//

export default function Hero() {
  return (
    <section className={sectionStyles}>
      <h1 className={headlineStyles}>
        <span>Hello</span>
        <MdWavingHand className={wavingHandStyles} />
        !&#39;
        <Typewriter
          options={{
            autoStart: true,
            delay: 50,
            loop: true,
            strings: typewriterData,
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
      <Button
        className={ctaStyles}
        size="lg"
      >
        Get in Touch
      </Button>
    </section>
  )
}