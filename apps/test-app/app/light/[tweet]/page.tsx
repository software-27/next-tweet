import { Suspense } from 'react'
import { TweetSkeleton } from 'next-tweet'
import theme from 'next-tweet/theme.module.css'
import TweetPage from './tweet-page'

export default async function Page({ params }: { params: { tweet: string } }) {
  return (
    <Suspense fallback={<TweetSkeleton />}>
      <TweetPage id={params.tweet} className={theme.light} />
    </Suspense>
  )
}
