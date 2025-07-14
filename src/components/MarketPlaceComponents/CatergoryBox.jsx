import styled from "styled-components";

export function CategoreyBox() {
      const CategoreyBox = styled.div`
    position: fixed; 

    top: 13vh;
    left: 27vw;

    width: 20vw;
    height: 10vh;
    background-color:rgb(174, 196, 193);
    display: flex;

    align-items: center;
    justify-content: center;
    `
  const CategoreyBoxText = styled.div`
  font-weight: bold;
  font-size: 25px;
  `

  return(
    <CategoreyBox>
             <CategoreyBoxText>목록</CategoreyBoxText>
        </CategoreyBox>
  );
}