import {
  RightSidebarContainer,
  RightSidebarTitle,
  RightSidebarContent,
} from './pages/Styled_components/RightSidebar.styled'

function RightSidebar() {
  return (
    <RightSidebarContainer>
      <RightSidebarTitle>Right Sidebar</RightSidebarTitle>
      <RightSidebarContent>
        {/* Add your content here */}
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          This is the right sidebar. You can add any content here.
        </p>
      </RightSidebarContent>
    </RightSidebarContainer>
  )
}

export default RightSidebar
