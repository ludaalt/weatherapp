import { FC } from "react";
import styled from "styled-components";

const MainHeader = styled.h1`
  margin-bottom: 20px;
  text-transform: uppercase;
`;

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return <MainHeader>{title}</MainHeader>;
};

export default Header;
