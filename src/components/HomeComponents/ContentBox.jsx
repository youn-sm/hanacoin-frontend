import styled from "styled-components";

export function ContentBox({title, info}) {
  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
  margin-bottom: 0vh;
  `

  const TitleBox = styled.div`
  width: 20vw;
  height: 10vh;
  background-color:rgb(174, 196, 193);
  display: flex;
  margin-bottom: 2vh;

  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 27px;
  `

  const InformationBox = styled.div`
  width: 20vw;
  height: 70vh;
  background-color:rgb(174, 196, 193);
  display: flex;
  `

  const InfoText = styled.div`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 27px;
  white-space: pre-line;
  padding: 2vh;
  `

  return (
    <Wrapper>
        <TitleBox>{title}</TitleBox>
        <InformationBox>
            <InfoText>{info}</InfoText>
        </InformationBox>
    </Wrapper>
  );
}
