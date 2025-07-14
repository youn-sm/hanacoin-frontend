import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

  const Container = styled.div`
  position: fixed;
  left: 0;
  width: 20vw;
  height: 100vh;
  background-color:rgb(14, 111, 99);
  display: flex;
  margin:0;
  flex-direction: column;
`;

    const ContainerText = styled.div`
    color: black;
    font-weight: bold;
    font-size: 25px;
    padding-top: 4vh;
    padding-left: 1vw;
    cursor: pointer;
    `

export function MenuBar() {
    const navigate = useNavigate();

    return(
    <>
    <Container>
        <ContainerText onClick={() => navigate('/home')}>-홈</ContainerText>
        <ContainerText onClick={() => navigate('/marketplace')}>-마켓플레이스</ContainerText>
        <ContainerText onClick={() => navigate('/productupload')}>-상품 등록</ContainerText>
        <ContainerText>-내 지갑</ContainerText>
        <ContainerText>-채팅</ContainerText>
        <ContainerText onClick={() => navigate('/login')}>-로그아웃</ContainerText>
    </Container>
    </>
        
    );
}