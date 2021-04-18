import React,{useState, useEffect} from 'react'
import './Product.css';
import CardDetails from '../Product/CardDetails';
import Cart from '../../assets/images/cart.png';
import { Link, useHistory } from "react-router-dom";
const ProductComponent = () => {
    let history = useHistory();
    const [search, setSearch] = useState('');
    const [product, setProducts] = useState([]);
    const [productFiltered, setProductFiltered] = useState([]);

    useEffect(() => {
        getProducts()
    },[])

    useEffect(() => {
        setProductFiltered(product.filter((items => items.title.toLowerCase().includes(search.toLowerCase()))))
    },[search, product])

    const getProducts = async() =>{
        let products = await fetch("https://fakestoreapi.com/products")
        products = await products.json();
        setProducts(products);
        console.log(products)
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    
const cartButton  = (e) => {
    e.preventDefault();
//    console.log(values);
   
   
        history.push("cart");
    }

    
    
    return (
        <div>
            <h1>Product Page</h1>
            {/* {search} */}
           <div style={{ height:"40px",display:"flex", justifyContent:"center", flexDirection:"row" }}>
           <input className="search-type" type="text"  placeholder="search" onChange={handleChange}></input>
           <button onClick={cartButton} style={{marginLeft:"60px", border:"none", outline:"none"}} type="submit"><img style={{width:"30px", height:"30px"}} src={Cart}/></button>
           </div>
            
            <div style={{ display: "flex", flexDirection:"row", width:"100%", height:"auto", flexWrap:"wrap",padding:"40px"}}>
            { productFiltered.length > 0 ?
               productFiltered.map((value,idx) => (<CardDetails key={idx} {...value}/>))
               :
               <p>Product not found</p>
            } 
       </div>
        </div>
    )
}

export default ProductComponent
