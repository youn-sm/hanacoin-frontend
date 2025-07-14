import styled from "styled-components";
import { useState } from "react";

// styled-components
const ListBoxWrapper = styled.div`
  position: fixed;
  top: 13vh;
  left: 49vw;
  width: 20vw;
  height: 10vh;
  background-color: rgb(174, 196, 193);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

const ListBoxText = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const DropdownIcon = styled.div`
  font-size: 20px;
  user-select: none;
`;

const DropdownMenu = styled.div`
  position: fixed;
  top: 23vh;
  left: 49vw;
  width: 20vw;
  background-color: #dfe9e6;
  border: 1px solid #999;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.div`
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #b2c7c2;
  }
`;

export function ListBox({ selectedMethod, setSelectedMethod }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (category) => {
    setSelectedMethod(category);
    setIsOpen(false);
  };

  return (
    <>
      <ListBoxWrapper onClick={toggleDropdown}>
        <ListBoxText>{selectedMethod}</ListBoxText>
        <DropdownIcon>▼</DropdownIcon>
      </ListBoxWrapper>

      {isOpen && (
        <DropdownMenu>
          {["학습자료", "문구", "간식", "기타"].map((item) => (
            <DropdownItem key={item} onClick={() => handleSelect(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </>
  );
}