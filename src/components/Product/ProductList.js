import React, {useState, useEffect} from 'react'
import './ProductPage.scss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
     
    },
  });

  
 
const ProductList = () => {
    // const {image, title, description, price} = props;
    const classes = useStyles();
    const [cartItems, setCartItems] = useState([]);
    
    
    useEffect(() => {
      let data = JSON.parse(localStorage.getItem("cart"));
         setCartItems(data)
        //  return () => data
        //  ;

    }, [])

  


//  const addItemToCart = (values) => {
//    const newCounter = values.quantity + 1;
//    setAdd(newCounter);
  //  const newCounter = countInc.counter + 1 ;
  //  setCountInc({counter : newCounter});
  //  console.log(newCounter)
//  }

//  const SubItemToCart = () => {
//   const newCounter = countInc.counter - 1 ;
//   setCountInc({counter : newCounter});
 //  console.log(newCounter)
// }
// const [valuess, setValues] = useState(values.quantity);
  
const addButton = (id,values) => {
  // const data = JSON.parse(localStorage.getItem("cart"));
  // data = values.quantity + 1;
  // data.splice(id,1 );
  // console.log(data)
  // let data = JSON.parse(localStorage.getItem("cart"));
  
  // data.splice(id,1);
  // localStorage.setItem("cart", JSON.stringify(data))
}
    const deleteButton = (id) => {
      alert("Do you Want to delete Item ??");
      let cartList = JSON.parse(localStorage.getItem("cart"));
      cartList.splice(id,1);
      localStorage.setItem("cart", JSON.stringify(cartList))
    }
    console.log(cartItems);
    return (
        <div>
            <h1>Shopping Cart</h1>

            <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Index</TableCell> */}
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Quantity&nbsp;</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            {/* <TableCell align="right">Total&nbsp;($)</TableCell> */}
            <TableCell align="right">Remove Item&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
        { cartItems.length > 0 ?
          cartItems.map((values,index) => {
              return(
                <TableRow key={index}>
              {/* <TableCell component="th" scope="row">
                {index}
              </TableCell> */}
              <TableCell align="right"><img style={{width:"50px", height:"50px"}} src={values.image}/></TableCell>
              <TableCell align="right">{values.title}</TableCell>
              <TableCell align="right">
               <button disabled={values.quantity}>-</button>
               <span>{values.quantity}</span>
               <button onClick={() => addButton(values.quantity + 1)} >+</button>
              </TableCell>
              <TableCell align="right">${values.price}</TableCell>
              {/* <TableCell align="right">Total</TableCell> */}
              <TableCell align="right"><button type="submit" onClick={deleteButton}>Delete</button></TableCell>
            </TableRow>
           
              )
          }) :
          <p>Please add Items </p>
        }
        </TableBody>
      
      </Table>
    </TableContainer>
      <div style={{marginTop:"20px"}}>
      <Button variant="contained" color="primary" >Proceed</Button>
     </div>
            </div>

        </div>
        
    )
}

export default ProductList
