import React,{useState, useEffect} from 'react'
import './card.css';
const Card = () => {

    useEffect(() =>{
        getItems();
    }, [])

    const getItems = async() => {
      let products = await fetch("https://fakestoreapi.com/products") ;
      products = await products.json();
      setItems(products);
      console.log(products)
    }

    const [items, setItems] = useState([]);
    return (
                <div className="card">
                  
                  {
                        items.map((item, index) => {
                            return(
                                <div key={index}>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
       
    )
}

export default Card;
