'use client'
import Marquee from 'react-fast-marquee'
import {BACKEND_STACKS, FRONTEND_STACKS, stacksProps} from '~/constants/stack'

const Skills = () => {
  return (
    <section aria-label="skills" className="my-4 space-y-4 bg-background">
      <h2 className="font-bold font-ubuntu text-lg">Tools That I Have Used</h2>
      <Marquee autoFill pauseOnHover>
        <SkillsList stacks={FRONTEND_STACKS} />
      </Marquee>

      <Marquee autoFill pauseOnHover direction="right">
        <SkillsList stacks={BACKEND_STACKS} />
      </Marquee>
    </section>
  )
}

export default Skills

const SkillsList = ({stacks}: {stacks: stacksProps}) => {
  return (
    <ul className="flex items-center" role="list">
      {Object.keys(stacks).map((stack, index) => {
        const Icon = stacks[stack].Icon
        const className = stacks[stack].className
        return (
          <li
            role="listitem"
            key={index}
            className="mr-2 flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-2 text-[15px] shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50"
          >
            {<Icon className={className} aria-label={stack} />}
            <span className="whitespace-nowrap">{stack}</span>
          </li>
        )
      })}
    </ul>
  )
}