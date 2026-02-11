import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../Sidebar";
import RightSidebar from "../RightSidebar";
import {
  LayoutContainer,
  MainContent,
  MobileToggleButton,
  Overlay,
} from "./Styled_components/Layout.styled";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <LayoutContainer>
      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} setsidebarOpen={setSidebarOpen} />

      {/* Overlay for mobile when sidebar is open */}
      <Overlay $isOpen={sidebarOpen} onClick={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <MainContent>
        {/* Mobile Toggle Button */}
        <MobileToggleButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X /> : <Menu />}
        </MobileToggleButton>

        <Outlet />
      </MainContent>

      {/* Right Sidebar */}
      <RightSidebar />
    </LayoutContainer>
  );
}

export default Layout;
