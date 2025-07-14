
import { CategoreyBox } from "../components/MarketPlaceComponents/CatergoryBox";
import { ListBox } from "../components/MarketPlaceComponents/ListBox";
import { ProductsBox } from "../components/MarketPlaceComponents/ProductsBox";
import { useState } from "react";

export function MarketPlace(){
    const [selectedMethod, setSelectedMethod] = useState("학습자료");

    return(
    <>
        <CategoreyBox/>
        <ListBox selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
      <ProductsBox selectedMethod={selectedMethod} />
    </>
    );
}