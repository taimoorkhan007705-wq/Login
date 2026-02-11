import { Heart, MessageCircle, Share2 } from 'lucide-react'
import {
  FeedContainer,
  StoriesContainer,
  StoryCard,
  CreateStoryCard,
  StoryAvatar,
  StoryTime,
  CreateStoryIcon,
  CreateStoryText,
  PostCard,
  PostHeader,
  PostAvatar,
  PostUserInfo,
  PostUserName,
  VerifiedBadge,
  PostUsername,
  PostTime,
  PostText,
  PostHashtag,
  PostImage,
  PostActions,
  ActionButton,
} from './Styled_components/Feed.styled'

function Feed() {
  // Dummy Stories Data
  const stories = [
    { id: 1, user: 'Sarah', avatar: 'https://i.pravatar.cc/150?img=1', bgColor: '#8b5cf6', time: '3 hours ago' },
    { id: 2, user: 'Mike', avatar: 'https://i.pravatar.cc/150?img=2', bgColor: '#3b82f6', time: '3 hours ago' },
    { id: 3, user: 'Emma', avatar: 'https://i.pravatar.cc/150?img=3', bgColor: '#10b981', time: '3 hours ago' },
    { id: 4, user: 'Alex', avatar: 'https://i.pravatar.cc/150?img=4', bgColor: '#f59e0b', time: '3 hours ago' },
  ]

  // Dummy Posts Data
  const posts = [
    {
      id: 1,
      userName: 'John Warren',
      username: '@john_warren',
      avatar: 'https://i.pravatar.cc/150?img=5',
      verified: true,
      time: '9 days ago',
      text: "We're a small #team with a big vision — working day and night to turn dreams into products, and #products into something people love.",
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      likes: 0,
      comments: 12,
      shares: 7,
    },
    {
      id: 2,
      userName: 'Sarah Johnson',
      username: '@sarah_j',
      avatar: 'https://i.pravatar.cc/150?img=6',
      verified: true,
      time: '2 hours ago',
      text: 'Just launched our new #product! So excited to share this with the world. Check it out and let me know what you think! 🚀',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      likes: 45,
      comments: 8,
      shares: 3,
    },
    {
      id: 3,
      userName: 'Michael Chen',
      username: '@mike_chen',
      avatar: 'https://i.pravatar.cc/150?img=7',
      verified: false,
      time: '5 hours ago',
      text: 'Beautiful sunset today! Sometimes you just need to take a moment and appreciate the little things in life. #nature #photography',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      likes: 128,
      comments: 15,
      shares: 22,
    },
  ]

  return (
    <FeedContainer>
      {/* Stories Section */}
      <StoriesContainer>
        {/* Create Story Card */}
        <CreateStoryCard>
          <CreateStoryIcon>+</CreateStoryIcon>
          <CreateStoryText>Create Story</CreateStoryText>
        </CreateStoryCard>

        {/* Story Cards */}
        {stories.map((story) => (
          <StoryCard key={story.id} $bgColor={story.bgColor}>
            <StoryAvatar src={story.avatar} alt={story.user} />
            <StoryTime>{story.time}</StoryTime>
          </StoryCard>
        ))}
      </StoriesContainer>

      {/* Posts Section */}
      {posts.map((post) => (
        <PostCard key={post.id}>
          {/* Post Header */}
          <PostHeader>
            <PostAvatar src={post.avatar} alt={post.userName} />
            <PostUserInfo>
              <PostUserName>
                {post.userName}
                {post.verified && <VerifiedBadge>✓</VerifiedBadge>}
              </PostUserName>
              <PostUsername>
                {post.username}
                <PostTime>{post.time}</PostTime>
              </PostUsername>
            </PostUserInfo>
          </PostHeader>

          {/* Post Content */}
          <PostText>
            {post.text.split('#').map((part, index) => {
              if (index === 0) return part
              const [hashtag, ...rest] = part.split(' ')
              return (
                <span key={index}>
                  <PostHashtag>#{hashtag}</PostHashtag> {rest.join(' ')}
                </span>
              )
            })}
          </PostText>

          {/* Post Image */}
          {post.image && <PostImage src={post.image} alt="Post" />}

          {/* Post Actions */}
          <PostActions>
            <ActionButton>
              <Heart />
              {post.likes}
            </ActionButton>
            <ActionButton>
              <MessageCircle />
              {post.comments}
            </ActionButton>
            <ActionButton>
              <Share2 />
              {post.shares}
            </ActionButton>
          </PostActions>
        </PostCard>
      ))}
    </FeedContainer>
  )
}

export default Feed
