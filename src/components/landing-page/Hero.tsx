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

export function Header() {
  return (
    <header className="text-gray-600 body-font fixed w-full shadow-md z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-semibold">NJ Veneracion</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        
      </div>
    </header>
  )
}

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
