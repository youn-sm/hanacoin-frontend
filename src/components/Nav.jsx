import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = styled.div`
  position: fixed;
  top: 0; 
  left: 0;
  width: 100vw;
  height: 8vh;
  background-color: #20a495;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: black;
  font-weight: bold;
`;

const PageTitle1 = styled.h1`
  font-size: 30px;
`;

const PageTitle2 = styled.h1`
  font-size: 30px;
  padding-left: 1190px;
  cursor: pointer;
`;

export function Nav({ username }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login";

  const handleClick = () => {
    if (isLoginPage) {
      navigate("/register");
    }
  };

  return (
    <NavigationBar>
      <PageTitle1>Hi - Market</PageTitle1>
      <PageTitle2 onClick={handleClick}>
        {isLoginPage ? "회원가입" : username}
      </PageTitle2>
    </NavigationBar>
  );
}
