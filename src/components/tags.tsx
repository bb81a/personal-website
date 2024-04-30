import {slug} from 'github-slugger'
import Link from 'next/link'
import {buttonVariants} from './ui/button'

const Tags = ({tags}: {tags: string[]}) => {
  return (
    <ul className="space-x-2" role="list">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </ul>
  )
}

export default Tags

export const Tag = ({tag}: {tag: string}) => {
  return (
    <li key={tag} role="listitem" className="inline-block">
      <Link
        className={buttonVariants({
          variant: 'link',
          className: '!p-0 h-full hover:text-ring',
        })}
        href={`/tags/${slug(tag)}`}
        aria-label={`Explore tag ${tag}`}
      >
        #{tag}
      </Link>
    </li>
  )
}
