import type { Tweet } from 'lib/twitter/api'
import TweetHeader from './tweet-header'
import TweetInReplyTo from './tweet-in-reply-to'
import TweetBody from './tweet-body'
import TweetInfo from './tweet-info'
import s from './tweet.module.css'
import TweetActions from './tweet-actions'
import TweetReplies from './tweet-replies'
import TweetMedia from './tweet-media'

const Tweet = ({ data: tweet }: { data: Tweet }) => (
  <div className={s.tweet}>
    <article className={s.article}>
      <TweetHeader tweet={tweet} />
      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
      <TweetBody tweet={tweet} />
      {tweet.mediaDetails?.length ? <TweetMedia tweet={tweet} /> : null}
      <TweetInfo tweet={tweet} />
      <TweetActions tweet={tweet} />
      <TweetReplies tweet={tweet} />
    </article>
  </div>
)

export default Tweet
