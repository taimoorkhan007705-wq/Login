import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  PageContainer,
  OuterCard,
  InnerCard,
  LogoContainer,
  LogoBox,
  BrandName,
  Heading,
  Subheading,
  Form,
  Input,
  SignInButton,
  Footer,
  SignUpLink,
  Divider,
  DividerLine,
  DividerText,
  RoleDropdownContainer,
  RoleButton,
  DropdownMenu,
  DropdownItem,
  ContinueText,
  SocialButtonsContainer,
  SocialButton,
  IconWrapper,
} from "./Styled_components/Login.styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const roles = ["User", "Reviewer", "Business", "Admin"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, role });
    alert(`Signing in as ${role}\nEmail: ${email}`);
  };

  const handleRoleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setIsDropdownOpen(false);
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login clicked");
  };

  return (
    <PageContainer>
      <OuterCard>
        <InnerCard>
          {/* Logo */}
          <LogoContainer>
            <LogoBox>✓</LogoBox>
            <BrandName>Verity</BrandName>
          </LogoContainer>

          {/* Heading */}
          <Heading>Welcome Back</Heading>
          <Subheading>Sign in to your Verity account</Subheading>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <SignInButton type="submit">Sign In</SignInButton>
          </Form>

          {/* Footer */}
          <Footer>
            Don't have an account? <SignUpLink>Sign up</SignUpLink>
          </Footer>

          {/* Divider */}
          <Divider>
            <DividerLine />
            <DividerText>or</DividerText>
            <DividerLine />
          </Divider>

          {/* Role Selection Dropdown */}
          <RoleDropdownContainer>
            <RoleButton
              type="button"
              onClick={handleRoleButtonClick}
              $isOpen={isDropdownOpen}
            >
              login as {role}
            </RoleButton>
            <DropdownMenu $isOpen={isDropdownOpen}>
              {roles.map((roleOption) => (
                <DropdownItem
                  key={roleOption}
                  type="button"
                  $isSelected={role === roleOption}
                  onClick={() => handleRoleSelect(roleOption)}
                >
                  {roleOption}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </RoleDropdownContainer>

          {/* Continue with */}
          <ContinueText>Or continue with</ContinueText>

          {/* Social Buttons */}
          <SocialButtonsContainer>
            <SocialButton type="button" onClick={handleGoogleLogin}>
              <IconWrapper>
                <FcGoogle />
              </IconWrapper>
              Google
            </SocialButton>
            <SocialButton type="button" onClick={handleFacebookLogin}>
              <IconWrapper>
                <FaFacebook color="#1877f2" />
              </IconWrapper>
              Facebook
            </SocialButton>
          </SocialButtonsContainer>
        </InnerCard>
      </OuterCard>
    </PageContainer>
  );
};

export default Login;