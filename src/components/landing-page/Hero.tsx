import clsx from 'clsx';

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
  'text-center'
);

const buttonStyles = clsx(
  'bg-blue-600',
  'text-white',
  'rounded-lg',
  'px-6',     
  'py-3',      
  'hover:bg-blue-700',
  'transition-colors'
);

//--------------------------------------------------------------------//

export default function Hero() {
  return (
    <section className={sectionStyles}>
      <h1 className={headlineStyles}>
        Hello, I'm a Full Stack Developer
      </h1>
      <p className="max-w-xl text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus error quod esse minus aliquam blanditiis asperiores
        inventore voluptate reprehenderit, obcaecati dolor. Culpa
        excepturi commodi a beatae, eaque nemo ipsa aliquid!
      </p>
      <button className={buttonStyles}>
        Contact Me  
      </button>
    </section>
  )
}
