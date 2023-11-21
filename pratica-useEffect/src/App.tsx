import { useEffect, useState } from "react";
import { findProductById } from "./data";


function App() {

    const [productId, setProductId] = useState((1));
    const [product, setProduct] = useState<any>();

    useEffect(() => {
        setProduct(findProductById(productId));
    }, [productId]);

    function handleButton(){
        setProductId(2);
    }

    return (
      <>
        <p>Nome do produto: {product?.name}</p>
        <p>Preço do produto: R${product?.value}</p>
        <button onClick={handleButton}>Mudar para o produto 2</button>
      </>
    )  
}

export default App
