import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "./components/pages/login"
import Feed from "./components/pages/Feed"
import Messages from "./components/pages/Messages"
import Connections from "./components/pages/Connections"
import ChatBox from "./components/pages/ChatBox"
import Discover from "./components/pages/Discover"
import CreatePost from "./components/pages/CreatePost"
import Profile from "./components/pages/Profile"
import ReviewCenter from "./components/pages/ReviewCenter"
import Layout from "./components/pages/layout"  

function App() {
  const user = true;
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
  return (
    <Routes>
      {/* Review Center - Standalone (no main layout) */}
      <Route path="/review-center" element={<ReviewCenter />} />
      
      {/* Main App Routes with Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="feed" element={<Feed />} />
        <Route path="messages" element={<Messages />}>
          <Route path=":userId" element={<ChatBox />} />
        </Route>
        <Route path="connections" element={<Connections />} />
        <Route path="discover" element={<Discover />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:profileId" element={<Profile />} />
        <Route path="create-post" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}

export default App