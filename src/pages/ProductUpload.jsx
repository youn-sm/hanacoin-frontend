import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

 const Wrapper = styled.div`
        display: flex; 
        flex-direction: column;
        margin-left: 1vw;
        margin-top: 2vh; 
    `;

    const ProductUploadBox = styled.div`
        width: 50vw; 
        height: auto;
        background-color:rgb(174, 196, 193);
        padding: 2vh 2vw;
        border-radius: 10px;
    `;

    const Label = styled.label`
        font-size: 1.2vw; 
        font-weight: bold;
        color: black; 
        width: 8vw;
    `;

    const Input = styled.input`
        width: 20vw;
        height: 5vh;
        background-color: #e3e3e3;
        border: none;
        padding: 0 1vw;
        font-size: 1vw;
    `;

    const Select = styled.select`
        width: 20vw;
        height: 5vh;
        font-size: 1vw;
        background-color: #e3e3e3;
        border: none;
        padding: 0 1vw;
    `;

    const InputRow = styled.div`
        display: flex; 
        align-items: center; 
        gap: 1vw;
        margin-bottom: 2vh;
    `;

    const SubmitButton = styled.button`
        width: 10vw;
        height: 5vh;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1vw;
        cursor: pointer;
    `;
export function ProductUpload() {
   

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [method, setMethod] = useState("");

    const navigate = useNavigate();

    const HandleSubmit = async () => {
        try{
            const response = await axios.post('https://hanacoin.hasclassmatching.com/markets/products',{
                "title": title,
                "description": description,
                "price": Number(price),
                "category": category,
                "method": method
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('상품 등록 성공!');
            navigate('/marketplace')
        } catch (error) {
            console.error('상품 등록 실패:', error);
            alert('상품 등록 중 문제가 발생했습니다.')
        }
    };

    return (
        <ProductUploadBox>
            <Wrapper>
                <InputRow>
                    <Label>상품명:</Label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </InputRow>

                <InputRow>
                    <Label>설명:</Label>
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                </InputRow>

                <InputRow>
                    <Label>가격:</Label>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </InputRow>

                <InputRow>
                    <Label>거래방식:</Label>
                    <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">선택</option>
                        <option value="온라인">온라인</option>
                        <option value="오프라인">오프라인</option>
                    </Select>
                </InputRow>
                <InputRow>
  <Label>카테고리:</Label>
  <Select value={method} onChange={(e) => setMethod(e.target.value)}>
    <option value="">선택</option>
    <option value="학습자료">학습자료</option>
    <option value="문구">문구</option>
    <option value="간식">간식</option>
    <option value="기타">기타</option>
  </Select>
</InputRow>


                <InputRow>
                    <SubmitButton onClick={HandleSubmit}>상품 등록</SubmitButton>
                </InputRow>
            </Wrapper>
        </ProductUploadBox>
    );
}
