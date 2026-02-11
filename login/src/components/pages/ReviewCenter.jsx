import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertTriangle, CheckCircle, Flag, ArrowLeft, TrendingUp, Award } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import {
  ReviewCenterContainer,
  TopHeader,
  HeaderLeft,
  Logo,
  LogoIcon,
  LogoText,
  HeaderTitle,
  HeaderRight,
  ReviewerInfo,
  ReviewerAvatar,
  ReviewerDetails,
  ReviewerName,
  ReviewerRole,
  BackButton,
  ContentWrapper,
  ReviewSidebar,
  SidebarTitle,
  SidebarMenu,
  SidebarMenuItem,
  MenuBadge,
  MainContent,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  FiltersRow,
  FilterSelect,
  ReviewCardsGrid,
  ReviewCard,
  ReviewCardHeader,
  AuthorInfo,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  AuthorMeta,
  RiskBadge,
  PostContent,
  PostText,
  PostImage,
  AIAnalysisSection,
  AIAnalysisTitle,
  AIScoreGrid,
  AIScoreItem,
  AIScoreLabel,
  AIScoreValue,
  AIScoreBar,
  AIScoreBarFill,
  AIIssuesList,
  AIIssueItem,
  ActionButtonsRow,
  ApproveButton,
  RejectButton,
  FlagButton,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ReasonSelect,
  ReasonTextarea,
  ModalButtons,
  ModalCancelButton,
  ModalSubmitButton,
} from './Styled_components/ReviewCenter.styled'

function ReviewCenter() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('pending')
  const [filterRisk, setFilterRisk] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [showRejectModal, setShowRejectModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [rejectionReason, setRejectionReason] = useState('')
  const [rejectionNotes, setRejectionNotes] = useState('')

  // All posts with status tracking
  const [allPosts, setAllPosts] = useState([
    {
      id: 1,
      author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1', trustScore: 75, postsCount: 45 },
      text: 'Breaking: Major earthquake hits California! Thousands affected. #earthquake #california #news',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop',
      timestamp: '5 minutes ago',
      risk: 'high',
      status: 'pending',
      reviewedAt: null,
      aiAnalysis: {
        overallScore: 35, imageAuthenticity: 45, textCredibility: 30, toxicity: 15, spam: 10,
        issues: ['Potential misinformation detected', 'No credible source linked', 'Sensational language used', 'Image may be from different event'],
        recommendation: 'REVIEW_REQUIRED',
      },
    },
    {
      id: 2,
      author: { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=2', trustScore: 92, postsCount: 120 },
      text: 'Just had the most amazing pizza at Tony\'s! 🍕 Highly recommend the margherita. #foodie #pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
      timestamp: '12 minutes ago',
      risk: 'low',
      status: 'approved',
      reviewedAt: 'Today at 2:30 PM',
      aiAnalysis: {
        overallScore: 95, imageAuthenticity: 98, textCredibility: 95, toxicity: 5, spam: 8,
        issues: [],
        recommendation: 'AUTO_APPROVE',
      },
    },
    {
      id: 3,
      author: { name: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?img=3', trustScore: 68, postsCount: 32 },
      text: 'Check out this new cryptocurrency investment opportunity! 🚀 Get rich quick! DM for details. #crypto #investment',
      image: null,
      timestamp: '25 minutes ago',
      risk: 'medium',
      status: 'rejected',
      reviewedAt: 'Today at 1:45 PM',
      rejectReason: 'Spam/Promotional Content',
      rejectNotes: 'Financial scam detected',
      aiAnalysis: {
        overallScore: 55, imageAuthenticity: null, textCredibility: 40, toxicity: 12, spam: 85,
        issues: ['High spam probability', 'Promotional content detected', 'Financial advice without disclaimer'],
        recommendation: 'REVIEW_REQUIRED',
      },
    },
    {
      id: 4,
      author: { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=4', trustScore: 88, postsCount: 89 },
      text: 'Beautiful sunset at the beach today! Nature is amazing 🌅 #sunset #beach #nature',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      timestamp: '1 hour ago',
      risk: 'low',
      status: 'approved',
      reviewedAt: 'Today at 3:15 PM',
      aiAnalysis: {
        overallScore: 92, imageAuthenticity: 95, textCredibility: 90, toxicity: 3, spam: 5,
        issues: [],
        recommendation: 'AUTO_APPROVE',
      },
    },
    {
      id: 5,
      author: { name: 'David Lee', avatar: 'https://i.pravatar.cc/150?img=5', trustScore: 55, postsCount: 28 },
      text: 'URGENT: Click this link to claim your prize! Limited time offer! 🎁💰',
      image: null,
      timestamp: '2 hours ago',
      risk: 'high',
      status: 'flagged',
      reviewedAt: 'Today at 2:00 PM',
      flagReason: 'Potential scam - needs admin review',
      aiAnalysis: {
        overallScore: 18, imageAuthenticity: null, textCredibility: 15, toxicity: 8, spam: 95,
        issues: ['Extremely high spam probability', 'Phishing attempt detected', 'Suspicious links'],
        recommendation: 'REJECT',
      },
    },
    {
      id: 6,
      author: { name: 'Lisa Brown', avatar: 'https://i.pravatar.cc/150?img=6', trustScore: 82, postsCount: 67 },
      text: 'Morning coffee and a good book ☕📚 Perfect start to the day!',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
      timestamp: '3 hours ago',
      risk: 'low',
      status: 'pending',
      reviewedAt: null,
      aiAnalysis: {
        overallScore: 94, imageAuthenticity: 96, textCredibility: 92, toxicity: 2, spam: 4,
        issues: [],
        recommendation: 'AUTO_APPROVE',
      },
    },
    {
      id: 7,
      author: { name: 'Tom Harris', avatar: 'https://i.pravatar.cc/150?img=7', trustScore: 48, postsCount: 15 },
      text: 'This celebrity scandal will shock you! Exclusive leaked photos! Click to see more!',
      image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600&h=400&fit=crop',
      timestamp: '4 hours ago',
      risk: 'high',
      status: 'pending',
      reviewedAt: null,
      aiAnalysis: {
        overallScore: 28, imageAuthenticity: 35, textCredibility: 22, toxicity: 18, spam: 78,
        issues: ['Clickbait detected', 'Privacy violation concerns', 'Unverified claims'],
        recommendation: 'REVIEW_REQUIRED',
      },
    },
  ])

  // Calculate stats from posts
  const stats = useMemo(() => {
    const pending = allPosts.filter(p => p.status === 'pending').length
    const approved = allPosts.filter(p => p.status === 'approved').length
    const rejected = allPosts.filter(p => p.status === 'rejected').length
    const flagged = allPosts.filter(p => p.status === 'flagged').length
    const total = approved + rejected
    const accuracy = total > 0 ? Math.round((approved / total) * 100) : 0
    
    return { pending, approved, rejected, flagged, accuracy, total }
  }, [allPosts])

  // Filter posts based on active tab and filters
  const filteredPosts = useMemo(() => {
    let posts = allPosts.filter(post => post.status === activeTab)
    
    if (filterRisk !== 'all') {
      posts = posts.filter(post => post.risk === filterRisk)
    }
    
    if (filterType === 'image') {
      posts = posts.filter(post => post.image !== null)
    } else if (filterType === 'text') {
      posts = posts.filter(post => post.image === null)
    }
    
    // Sort posts
    posts = [...posts].sort((a, b) => {
      if (sortBy === 'newest') return a.id > b.id ? -1 : 1
      if (sortBy === 'oldest') return a.id < b.id ? -1 : 1
      if (sortBy === 'risk') {
        const riskOrder = { high: 3, medium: 2, low: 1 }
        return riskOrder[b.risk] - riskOrder[a.risk]
      }
      return 0
    })
    
    return posts
  }, [allPosts, activeTab, filterRisk, filterType, sortBy])

  // Action handlers
  const handleApprove = (postId) => {
    setAllPosts(posts => posts.map(post => 
      post.id === postId 
        ? { ...post, status: 'approved', reviewedAt: new Date().toLocaleString() }
        : post
    ))
    alert('Post approved successfully!')
  }

  const handleReject = (post) => {
    setSelectedPost(post)
    setShowRejectModal(true)
  }

  const handleRejectSubmit = () => {
    if (!rejectionReason) {
      alert('Please select a rejection reason')
      return
    }
    
    setAllPosts(posts => posts.map(post => 
      post.id === selectedPost.id 
        ? { 
            ...post, 
            status: 'rejected', 
            reviewedAt: new Date().toLocaleString(),
            rejectReason: rejectionReason,
            rejectNotes: rejectionNotes
          }
        : post
    ))
    
    alert('Post rejected successfully!')
    setShowRejectModal(false)
    setRejectionReason('')
    setRejectionNotes('')
    setSelectedPost(null)
  }

  const handleFlag = (postId) => {
    setAllPosts(posts => posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            status: 'flagged', 
            reviewedAt: new Date().toLocaleString(),
            flagReason: 'Flagged for admin review'
          }
        : post
    ))
    alert('Post flagged for admin review!')
  }

  return (
    <ReviewCenterContainer>
      {/* Top Header */}
      <TopHeader>
        <HeaderLeft>
          <Logo>
            <LogoIcon>✓</LogoIcon>
            <LogoText>Verity</LogoText>
          </Logo>
          <HeaderTitle>Review Center</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <ReviewerInfo>
            <ReviewerAvatar src={user?.avatar} alt={user?.name} />
            <ReviewerDetails>
              <ReviewerName>{user?.name}</ReviewerName>
              <ReviewerRole>Content Reviewer</ReviewerRole>
            </ReviewerDetails>
          </ReviewerInfo>
          <BackButton onClick={() => navigate('/feed')}>
            <ArrowLeft size={18} />
            Back to Feed
          </BackButton>
        </HeaderRight>
      </TopHeader>

      {/* Content Wrapper */}
      <ContentWrapper>
        {/* Sidebar */}
        <ReviewSidebar>
          <SidebarTitle>Navigation</SidebarTitle>
          <SidebarMenu>
            <SidebarMenuItem $isActive={activeTab === 'pending'} onClick={() => setActiveTab('pending')}>
              Pending
              {stats.pending > 0 && <MenuBadge>{stats.pending}</MenuBadge>}
            </SidebarMenuItem>
            <SidebarMenuItem $isActive={activeTab === 'approved'} onClick={() => setActiveTab('approved')}>
              Approved
              {stats.approved > 0 && <span style={{color: '#10b981', fontSize: '0.875rem', fontWeight: 600}}>({stats.approved})</span>}
            </SidebarMenuItem>
            <SidebarMenuItem $isActive={activeTab === 'rejected'} onClick={() => setActiveTab('rejected')}>
              Rejected
              {stats.rejected > 0 && <span style={{color: '#ef4444', fontSize: '0.875rem', fontWeight: 600}}>({stats.rejected})</span>}
            </SidebarMenuItem>
            <SidebarMenuItem $isActive={activeTab === 'flagged'} onClick={() => setActiveTab('flagged')}>
              Flagged
              {stats.flagged > 0 && <span style={{color: '#f59e0b', fontSize: '0.875rem', fontWeight: 600}}>({stats.flagged})</span>}
            </SidebarMenuItem>
            <SidebarMenuItem $isActive={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>
              Statistics
            </SidebarMenuItem>
          </SidebarMenu>
        </ReviewSidebar>

        {/* Main Content */}
        <MainContent>
          {/* Statistics View */}
          {activeTab === 'stats' && (
            <>
              <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937'}}>
                📊 Reviewer Statistics
              </h2>
              <StatsGrid>
                <StatCard>
                  <StatLabel>Total Reviews</StatLabel>
                  <StatValue $color="#6366f1">{stats.total}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Pending Reviews</StatLabel>
                  <StatValue $color="#f59e0b">{stats.pending}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Approved Posts</StatLabel>
                  <StatValue $color="#10b981">{stats.approved}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Rejected Posts</StatLabel>
                  <StatValue $color="#ef4444">{stats.rejected}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Flagged Posts</StatLabel>
                  <StatValue $color="#f59e0b">{stats.flagged}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Verity Score</StatLabel>
                  <StatValue $color="#14b8a6">
                    {stats.accuracy}%
                    <Award size={24} style={{display: 'inline', marginLeft: '0.5rem', verticalAlign: 'middle'}} />
                  </StatValue>
                </StatCard>
              </StatsGrid>
              
              <div style={{marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <TrendingUp size={24} color="#14b8a6" />
                  Your Verity Score Breakdown
                </h3>
                <p style={{color: '#6b7280', marginBottom: '1rem'}}>
                  Your Verity Score is calculated based on your review accuracy and consistency. Keep up the great work!
                </p>
                <div style={{display: 'grid', gap: '1rem'}}>
                  <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                      <span style={{color: '#374151', fontWeight: 600}}>Accuracy Rate</span>
                      <span style={{color: '#14b8a6', fontWeight: 'bold'}}>{stats.accuracy}%</span>
                    </div>
                    <div style={{width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden'}}>
                      <div style={{width: `${stats.accuracy}%`, height: '100%', background: 'linear-gradient(90deg, #14b8a6, #10b981)', transition: 'width 0.3s'}}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                      <span style={{color: '#374151', fontWeight: 600}}>Review Speed</span>
                      <span style={{color: '#10b981', fontWeight: 'bold'}}>Fast</span>
                    </div>
                    <div style={{width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden'}}>
                      <div style={{width: '85%', height: '100%', background: 'linear-gradient(90deg, #10b981, #059669)', transition: 'width 0.3s'}}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                      <span style={{color: '#374151', fontWeight: 600}}>Consistency</span>
                      <span style={{color: '#6366f1', fontWeight: 'bold'}}>Excellent</span>
                    </div>
                    <div style={{width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden'}}>
                      <div style={{width: '92%', height: '100%', background: 'linear-gradient(90deg, #6366f1, #4f46e5)', transition: 'width 0.3s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Posts View (Pending, Approved, Rejected, Flagged) */}
          {activeTab !== 'stats' && (
            <>
              {/* Quick Stats */}
              <StatsGrid>
                <StatCard>
                  <StatLabel>Pending Reviews</StatLabel>
                  <StatValue $color="#f59e0b">{stats.pending}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Approved Today</StatLabel>
                  <StatValue $color="#10b981">{stats.approved}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Rejected Today</StatLabel>
                  <StatValue $color="#ef4444">{stats.rejected}</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Verity Score</StatLabel>
                  <StatValue $color="#14b8a6">{stats.accuracy}%</StatValue>
                </StatCard>
              </StatsGrid>

              {/* Filters */}
              <FiltersRow>
                <FilterSelect value={filterRisk} onChange={(e) => setFilterRisk(e.target.value)}>
                  <option value="all">All Risk Levels</option>
                  <option value="high">High Risk</option>
                  <option value="medium">Medium Risk</option>
                  <option value="low">Low Risk</option>
                </FilterSelect>
                <FilterSelect value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                  <option value="all">All Types</option>
                  <option value="image">With Images</option>
                  <option value="text">Text Only</option>
                </FilterSelect>
                <FilterSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="risk">Highest Risk</option>
                </FilterSelect>
              </FiltersRow>

              {/* Review Cards */}
              {filteredPosts.length === 0 ? (
                <div style={{textAlign: 'center', padding: '3rem', color: '#6b7280'}}>
                  <p style={{fontSize: '1.125rem', fontWeight: 600}}>No posts in this category</p>
                  <p style={{marginTop: '0.5rem'}}>Check other tabs for more content</p>
                </div>
              ) : (
                <ReviewCardsGrid>
                  {filteredPosts.map((post) => (
                    <ReviewCard key={post.id} $risk={post.risk}>
                      {/* Header */}
                      <ReviewCardHeader>
                        <AuthorInfo>
                          <AuthorAvatar src={post.author.avatar} alt={post.author.name} />
                          <AuthorDetails>
                            <AuthorName>{post.author.name}</AuthorName>
                            <AuthorMeta>
                              Trust Score: {post.author.trustScore}% • {post.author.postsCount} posts • {post.timestamp}
                            </AuthorMeta>
                          </AuthorDetails>
                        </AuthorInfo>
                        <RiskBadge $risk={post.risk}>
                          {post.risk === 'high' && '🔴 High Risk'}
                          {post.risk === 'medium' && '🟡 Medium Risk'}
                          {post.risk === 'low' && '🟢 Low Risk'}
                        </RiskBadge>
                      </ReviewCardHeader>

                      {/* Post Content */}
                      <PostContent>
                        <PostText>{post.text}</PostText>
                        {post.image && <PostImage src={post.image} alt="Post content" />}
                      </PostContent>

                      {/* Status Badge for reviewed posts */}
                      {post.status !== 'pending' && (
                        <div style={{
                          padding: '0.75rem',
                          background: post.status === 'approved' ? '#d1fae5' : post.status === 'rejected' ? '#fee2e2' : '#fef3c7',
                          borderRadius: '0.5rem',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            fontWeight: 600,
                            color: post.status === 'approved' ? '#059669' : post.status === 'rejected' ? '#dc2626' : '#d97706',
                            marginBottom: '0.25rem'
                          }}>
                            {post.status === 'approved' && '✓ Approved'}
                            {post.status === 'rejected' && '✕ Rejected'}
                            {post.status === 'flagged' && '⚑ Flagged'}
                          </div>
                          <div style={{fontSize: '0.875rem', color: '#6b7280'}}>
                            {post.reviewedAt}
                          </div>
                          {post.rejectReason && (
                            <div style={{marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151'}}>
                              <strong>Reason:</strong> {post.rejectReason}
                              {post.rejectNotes && <div><strong>Notes:</strong> {post.rejectNotes}</div>}
                            </div>
                          )}
                          {post.flagReason && (
                            <div style={{marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151'}}>
                              <strong>Reason:</strong> {post.flagReason}
                            </div>
                          )}
                        </div>
                      )}

                      {/* AI Analysis */}
                      <AIAnalysisSection>
                        <AIAnalysisTitle>
                          🤖 AI Analysis
                          {post.aiAnalysis.recommendation === 'AUTO_APPROVE' && (
                            <span style={{ color: '#10b981', fontSize: '0.875rem' }}>
                              (Recommended: Auto-Approve)
                            </span>
                          )}
                          {post.aiAnalysis.recommendation === 'REVIEW_REQUIRED' && (
                            <span style={{ color: '#f59e0b', fontSize: '0.875rem' }}>
                              (Recommended: Manual Review)
                            </span>
                          )}
                          {post.aiAnalysis.recommendation === 'REJECT' && (
                            <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>
                              (Recommended: Reject)
                            </span>
                          )}
                        </AIAnalysisTitle>

                        <AIScoreGrid>
                          <AIScoreItem>
                            <AIScoreLabel>Overall Score</AIScoreLabel>
                            <AIScoreValue $score={post.aiAnalysis.overallScore}>
                              {post.aiAnalysis.overallScore}%
                            </AIScoreValue>
                            <AIScoreBar>
                              <AIScoreBarFill $score={post.aiAnalysis.overallScore} />
                            </AIScoreBar>
                          </AIScoreItem>

                          {post.aiAnalysis.imageAuthenticity !== null && (
                            <AIScoreItem>
                              <AIScoreLabel>Image Authenticity</AIScoreLabel>
                              <AIScoreValue $score={post.aiAnalysis.imageAuthenticity}>
                                {post.aiAnalysis.imageAuthenticity}%
                              </AIScoreValue>
                              <AIScoreBar>
                                <AIScoreBarFill $score={post.aiAnalysis.imageAuthenticity} />
                              </AIScoreBar>
                            </AIScoreItem>
                          )}

                          <AIScoreItem>
                            <AIScoreLabel>Text Credibility</AIScoreLabel>
                            <AIScoreValue $score={post.aiAnalysis.textCredibility}>
                              {post.aiAnalysis.textCredibility}%
                            </AIScoreValue>
                            <AIScoreBar>
                              <AIScoreBarFill $score={post.aiAnalysis.textCredibility} />
                            </AIScoreBar>
                          </AIScoreItem>

                          <AIScoreItem>
                            <AIScoreLabel>Spam Probability</AIScoreLabel>
                            <AIScoreValue $score={100 - post.aiAnalysis.spam}>
                              {post.aiAnalysis.spam}%
                            </AIScoreValue>
                            <AIScoreBar>
                              <AIScoreBarFill $score={post.aiAnalysis.spam} />
                            </AIScoreBar>
                          </AIScoreItem>
                        </AIScoreGrid>

                        {post.aiAnalysis.issues.length > 0 && (
                          <AIIssuesList>
                            {post.aiAnalysis.issues.map((issue, index) => (
                              <AIIssueItem key={index}>
                                <AlertTriangle size={16} />
                                {issue}
                              </AIIssueItem>
                            ))}
                          </AIIssuesList>
                        )}
                      </AIAnalysisSection>

                      {/* Action Buttons - Only show for pending posts */}
                      {post.status === 'pending' && (
                        <ActionButtonsRow>
                          <ApproveButton onClick={() => handleApprove(post.id)}>
                            <CheckCircle size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                            Approve
                          </ApproveButton>
                          <RejectButton onClick={() => handleReject(post)}>
                            ✕ Reject
                          </RejectButton>
                          <FlagButton onClick={() => handleFlag(post.id)}>
                            <Flag size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                            Flag
                          </FlagButton>
                        </ActionButtonsRow>
                      )}
                    </ReviewCard>
                  ))}
                </ReviewCardsGrid>
              )}
            </>
          )}
        </MainContent>
      </ContentWrapper>

      {/* Rejection Modal */}
      <ModalOverlay $isOpen={showRejectModal} onClick={() => setShowRejectModal(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalTitle>Reject Post</ModalTitle>
          <ReasonSelect value={rejectionReason} onChange={(e) => setRejectionReason(e.target.value)}>
            <option value="">Select rejection reason...</option>
            <option value="Fake/Manipulated Image">Fake/Manipulated Image</option>
            <option value="Misinformation/Fake News">Misinformation/Fake News</option>
            <option value="Spam/Promotional Content">Spam/Promotional Content</option>
            <option value="Inappropriate Content">Inappropriate Content</option>
            <option value="Plagiarized Content">Plagiarized Content</option>
            <option value="Hate Speech/Harassment">Hate Speech/Harassment</option>
            <option value="Copyright Violation">Copyright Violation</option>
            <option value="Other">Other</option>
          </ReasonSelect>
          <ReasonTextarea
            placeholder="Add additional notes (optional)..."
            value={rejectionNotes}
            onChange={(e) => setRejectionNotes(e.target.value)}
          />
          <ModalButtons>
            <ModalCancelButton onClick={() => setShowRejectModal(false)}>
              Cancel
            </ModalCancelButton>
            <ModalSubmitButton onClick={handleRejectSubmit}>
              Reject Post
            </ModalSubmitButton>
          </ModalButtons>
        </ModalContent>
      </ModalOverlay>
    </ReviewCenterContainer>
  )
}

export default ReviewCenter
