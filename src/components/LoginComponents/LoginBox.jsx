import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 40vw;
  height: 45vh;
  background-color: #20a495;
  display: flex;
  border-radius: 1vw;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`;

const LoginTitle = styled.h1`
  font-size: 4vw;
  font-weight: bold;
  color: black;
  align-items: center;
  justify-content: center;
`;

const InputRow = styled.div`
  margin-top: 3vh;
  display: flex;
  align-items: center;
  gap: 1vw;
  margin-bottom: 2vh;
`;

const Label = styled.label`
  margin-left: 3vw;
  font-size: 2vw;
  font-weight: bold;
  color: black;
  width: 3vw;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  width: 15vw;
  height: 5vh;
  background-color: #e3e3e3;
  border: none;
  padding: 0 1vw;
  font-size: 1vw;
`;

const LoginButton = styled.button`
  width: 8vw;
  height: 15vh;
  background-color: #e3e3e3;
  border: none;
  font-size: 1.2vw;
  font-weight: bold;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-left: 25vw;
  margin-top: -17vh;
`;

const InputAndLoginWrapper = styled.div`
  padding-left: 1.8vw;
  justify-content: center;
`;

export function LoginBox({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <TitleWrapper>
        <LoginTitle>Hi - Market</LoginTitle>
      </TitleWrapper>

      <InputAndLoginWrapper>
        <InputRow>
          <Label>ID</Label>
          <Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputRow>

        <InputRow>
          <Label>PW</Label>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputRow>

        <ButtonWrapper>
          <LoginButton onClick={() => handleLogin(username, password)}>
            Login
          </LoginButton>
        </ButtonWrapper>
      </InputAndLoginWrapper>
    </Container>
  );
}
