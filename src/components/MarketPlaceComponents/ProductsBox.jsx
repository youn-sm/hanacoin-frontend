import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  margin-left: 20vw;
  margin-top: 20vh;
`;

const ProductCard = styled.div`
  background-color: #d3e1de;
  padding: 1vw;
  border-radius: 10px;
  width: 40vw;
`;

const ProductTitle = styled.div`
  font-size: 1.2vw;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 1vw;
  margin-top: 0.5vh;
`;

const ProductTags = styled.div`
  font-size: 0.9vw;
  color: #666;
`;

export function ProductsBox({ selectedMethod }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://13.124.52.107/markets/products");
        // 필터링: method가 선택된 항목과 일치하는 것만
        const filtered = response.data.filter(product => product.method === selectedMethod);
        setProducts(filtered);
      } catch (error) {
        console.error("상품 목록 불러오기 실패:", error);
      }
    };

    fetchProducts();
  }, [selectedMethod]);

  return (
    <Container>
      {products.map((product, index) => (
        <ProductCard key={index}>
          <ProductTitle>[{product.title}] {product.price} HNC</ProductTitle>
          <ProductTags>#{product.description}</ProductTags>
        </ProductCard>
      ))}
    </Container>
  );
}
