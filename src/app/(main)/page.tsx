// import {posts} from '#site/content'
import AboutSection from '~/components/about-section'
// import {PostList} from '~/components/post'
// import Skills from '~/components/skills'
// import {sortPosts} from '~/lib/utils'

const HomePage = () => {
  // const sortedPosts = sortPosts(posts.filter(post => post.published))
  return (
    <div className="!mt-8">
      <AboutSection />

      {/* <PostList posts={sortedPosts} showRss /> */}

      {/* <Skills /> */}
    </div>
  )
}

export default HomePage