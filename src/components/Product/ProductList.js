import React, {useState, useEffect} from 'react'
import './ProductPage.scss';
const ProductList = () => {
    // const {image, title, description, price} = props;
   
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
         setCartItems(JSON.parse(localStorage.getItem("cart")))
        
    }, [])

    console.log(cartItems);
    return (
        <div>
            <h1>Product List</h1>

           
         
<div>

         {
             cartItems.map((item, idx) => {
                 return(<div key={idx}>
                     <p>{item.title}</p>
                 </div>)
             })
         }

</div>
        </div>
        
    )
}

export default ProductList
