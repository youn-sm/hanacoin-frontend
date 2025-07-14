import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 40vw;
  height: 65vh;
  background-color: #20a495;
  display: flex;
  border-radius: 1vw;
  flex-direction: column;
  padding: 2vh 2vw;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5vw;
  font-weight: bold;
  color: black;
  margin-bottom: 2vh;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  margin-bottom: 1.5vh;
`;

const Label = styled.label`
  font-size: 1.2vw;
  font-weight: bold;
  color: black;
  width: 8vw;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  width: 20vw;
  height: 4vh;
  background-color: #e3e3e3;
  border: none;
  padding: 0 1vw;
  font-size: 1vw;
`;

const WalletButton = styled.button`
  background-color: #e3e3e3;
  border: none;
  font-size: 1vw;
  padding: 0.5vh 1vw;
  font-weight: bold;
  cursor: pointer;
`;

const JoinButton = styled.button`
  background-color: #e3e3e3;
  border: none;
  font-size: 1vw;
  font-weight: bold;
  padding: 0.5vh 1.5vw;
  margin-left: 1vw;
  cursor: pointer;
`;

const WalletRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8vw;
  gap: 1vw;
  margin-bottom: 1vh;
`;

const WalletAddress = styled.div`
  font-size: 1vw;
  font-weight: bold;
`;

const SubText = styled.div`
  margin-top: 2vh;
  font-size: 0.9vw;
  color: black;
  line-height: 1.5;
  padding: 0 1vw;
`;

const CompleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
`


export function RegisterBox() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [privateKey, setPrivateKey] = useState('')
  const navigate = useNavigate()

  const generateWallet = async () => {
    if(pw === '' || id === '') {
      alert("아이디와 비밀번호를 입력해주세요")
      return
    }
    if (pw !== confirmPw) {
      alert("비밀번호 확인이 비밀번호와 다릅니다.")
      return
    }

    try {
      const response = await axios.post('http://13.124.52.107/users/signup', {
        "username": id,
        "password": pw
      });
        
      const private_key = response.data.private_key
      setPrivateKey(private_key)
    }
    catch (error){
      console.error('로그인 실패:', error);
      alert("예기치 못한 에러 발생")
    }
  };

   if (privateKey === '') return (
    <Container>
      <TitleWrapper>
        <Title>회원가입</Title>
      </TitleWrapper>

      <InputRow>
        <Label>아이디</Label>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </InputRow>

      <InputRow>
        <Label>비밀번호</Label>
        <Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </InputRow>

      <InputRow>
        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
        />
      </InputRow>
      <CompleteWrapper>
      <WalletRow>
              <JoinButton onClick={generateWallet}>회원가입</JoinButton>
            </WalletRow>
      </CompleteWrapper>
      

      <SubText>
        Hi-Market에서는 Web3 지갑을 통해 거래가 이루어집니다. <br />
        지갑 주소는 익명으로 표시되며, 거래에만 사용됩니다. <br />
        처음 생성된 지갑 주소는 자동으로 내 계정에 연결되며, 바꾸지 않는 한 고정됩니다.
      </SubText>
    </Container>
  );
  else return(
    <Container>
      <SubText>
        -개인 키 백업 안내 <br/>
        하나마켓은 탈중앙화된 익명 지갑을 사용합니다. <br/>
        개인 키는 오직 본인만 보관해야 하며,  <br/>
        플랫폼은 이 키를 저장하지 않습니다. <br/>

        아래의 개인 키는 가입 후 다시 볼 수 없습니다. <br/>

        당신의 개인 키: <br/>
        {privateKey}
      </SubText>
      <JoinButton onClick={()=>{navigate('/login')}}>가입 완료하기</JoinButton>
    </Container>
  )
}
