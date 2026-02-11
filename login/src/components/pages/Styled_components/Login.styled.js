import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  padding: 0.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const OuterCard = styled.div`
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
  border-radius: 1.25rem;
  padding: 0.75rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 480px;
  width: 100%;
  max-height: 95vh;
  overflow: hidden;

  @media (min-width: 640px) {
    border-radius: 1.5rem;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    border-radius: 2rem;
    padding: 1.5rem;
    max-height: 105vh;
  }
`;

export const InnerCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.25rem 1rem;
  max-height: calc(95vh - 1.5rem);
  overflow: hidden;

  @media (min-width: 640px) {
    border-radius: 1.25rem;
    padding: 1.5rem 1.25rem;
    max-height: calc(90vh - 2rem);
  }

  @media (min-width: 768px) {
    border-radius: 1.5rem;
    padding: 2rem 1.75rem;
    max-height: calc(90vh - 3rem);
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    gap: 0.625rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const LogoBox = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background-color: #14b8a6;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.125rem;
  font-weight: bold;

  @media (min-width: 640px) {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.625rem;
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    font-size: 1.5rem;
  }
`;

export const BrandName = styled.h1`
  font-size: 1.375rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #14b8a6;
  margin: 0 0 0.375rem 0;

  @media (min-width: 640px) {
    font-size: 1.75rem;
    margin: 0 0 0.5rem 0;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;

export const Subheading = styled.p`
  color: #6b7280;
  font-size: 0.8125rem;
  margin: 0 0 1rem 0;

  @media (min-width: 640px) {
    font-size: 0.875rem;
    margin: 0 0 1.25rem 0;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    margin: 0 0 1.5rem 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.875rem;

  @media (min-width: 640px) {
    gap: 0.875rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.875rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #14b8a6;
    box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
  }

  @media (min-width: 640px) {
    padding: 0.875rem 1rem;
    border-radius: 0.75rem;
    font-size: 0.9375rem;
  }

  @media (min-width: 768px) {
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }
`;

export const SignInButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
  color: white;
  font-size: 0.9375rem;
  font-weight: 600;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.25rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 640px) {
    padding: 0.875rem;
    border-radius: 0.75rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 1.125rem;
  }
`;

export const Footer = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.8125rem;
  margin: 0 0 0.875rem 0;

  @media (min-width: 640px) {
    font-size: 0.875rem;
    margin: 0 0 1rem 0;
  }

  @media (min-width: 768px) {
    font-size: 0.95rem;
    margin: 0 0 1.25rem 0;
  }
`;

export const SignUpLink = styled.span`
  color: #14b8a6;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 0.875rem 0;

  @media (min-width: 640px) {
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    margin: 1.25rem 0;
  }
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #e5e7eb;
`;

export const DividerText = styled.span`
  padding: 0 0.625rem;
  color: #9ca3af;
  font-size: 0.8125rem;

  @media (min-width: 640px) {
    padding: 0 0.75rem;
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`;

export const RoleDropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const RoleButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.875rem;
  background: white;
  color: #14b8a6;
  font-size: 0.875rem;
  font-weight: 600;
  border: 2px solid #14b8a6;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  &:hover {
    background-color: #f0fdfa;
  }

  &::after {
    content: "▼";
    font-size: 0.5625rem;
    transition: transform 0.2s;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }

  @media (min-width: 640px) {
    padding: 0.875rem 1rem;
    border-radius: 0.75rem;
    font-size: 0.9375rem;

    &::after {
      font-size: 0.625rem;
    }
  }

  @media (min-width: 768px) {
    padding: 1rem 1.25rem;
    font-size: 1rem;

    &::after {
      font-size: 0.75rem;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #14b8a6;
  border-radius: 0.625rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
  display: ${props => props.$isOpen ? 'block' : 'none'};

  @media (min-width: 768px) {
    border-radius: 0.75rem;
  }
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 0.625rem 0.875rem;
  background: ${props => props.$isSelected ? '#f0fdfa' : 'white'};
  color: ${props => props.$isSelected ? '#14b8a6' : '#374151'};
  font-size: 0.875rem;
  font-weight: ${props => props.$isSelected ? '600' : '500'};
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f0fdfa;
    color: #14b8a6;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1rem;
    font-size: 0.9375rem;
  }

  @media (min-width: 768px) {
    padding: 0.875rem 1.25rem;
    font-size: 1rem;
  }
`;

export const ContinueText = styled.p`
  text-align: center;
  color: #9ca3af;
  font-size: 0.8125rem;
  margin: 1rem 0 0.625rem 0;

  @media (min-width: 640px) {
    font-size: 0.875rem;
    margin: 1.25rem 0 0.75rem 0;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin: 1.5rem 0 1rem 0;
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 0.625rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SocialButton = styled.button`
  flex: 1;
  padding: 0.625rem 0.875rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  border: 2px solid #e5e7eb;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    font-size: 0.9375rem;
    gap: 0.625rem;
  }

  @media (min-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.95rem;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.125rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;