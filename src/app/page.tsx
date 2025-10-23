import { Hero, About } from '../components/landing-page';
import { ModeToggle } from '../components/ui/toggle-theme';
import { GithubButton } from '../components/ui/github-button';
import { FacebookButton } from '@/components/ui/facebook-button';


export function Header() {
  return (
    <header className="body-font fixed w-full shadow-md bg-background z-50">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img
            src="https://tr.rbxcdn.com/180DAY-c61af60472ca1c4a27e7d9f819cce3de/420/420/FaceAccessory/Webp/noFilter"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 text-xl font-semibold">NJ Veneracion</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a 
          href="#about"
          className="mr-5  cursor-pointer">About</a>
          <a 
          href="#projects"
          className="mr-5  cursor-pointer">Projects</a>
          <a 
          href="#contact"
          className="mr-5  cursor-pointer">Contact</a>
          <a 
          href="#blog"
          className="mr-5  cursor-pointer">Blog</a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2">
          <FacebookButton />
          <GithubButton />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
    </main>
  )
}
