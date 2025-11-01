import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiGit
} from "react-icons/si";

//styles
//--------------------------------------------------------------------//

const marqueeStyles = clsx(
  'w-full',
  'mt-10',
  'mb-10',
  'py-5',
  'bg-black/10',
);

const marqueeItemStyles = clsx(
  'flex',
  'flex-col',
  'items-center',
  'gap-2',
  'min-w-fit',
  'mx-8'
);

//--------------------------------------------------------------------//

//tech stack logos
//--------------------------------------------------------------------//

const techLogos = [
  { icon: <SiReact size={48} color="#61DAFB" />, name: 'React' },
  { icon: <SiNodedotjs size={48} color="#339933" />, name: 'Node.js' },
  { icon: <SiNextdotjs size={48} color="#000000" />, name: 'Next.js' },
  { icon: <SiTypescript size={48} color="#3178C6" />, name: 'TypeScript' },
  { icon: <SiTailwindcss size={48} color="#38B2AC" />, name: 'Tailwind CSS' },
  { icon: <SiGithub size={48} color="#181717" />, name: 'GitHub' },
  { icon: <SiGit size={48} color="#F05032" />, name: 'Git' }
];

//--------------------------------------------------------------------//

export default function MarqueeSkills() {
  return (
    <section className="w-full overflow-x-hidden">
      <Marquee
        className={marqueeStyles}
        gradient={false}
        speed={50}
        pauseOnHover={true}
      >
        {[...Array(5)].map((_, setIndex) => (
          techLogos.map((logo, index) => (
            <div
              key={`${setIndex}-${index}`}
              className={marqueeItemStyles}
            >
              {logo.icon}
              <span className="text-sm">{logo.name}</span>
            </div>
          ))
        ))}
      </Marquee>
    </section>
  )
}
