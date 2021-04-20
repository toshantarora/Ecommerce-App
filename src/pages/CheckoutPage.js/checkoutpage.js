import React, { Component } from 'react';
import "../../assets/css/shopping-cart.scss";
import closedSvg from "../../assets/img/closed.svg";
// import contactTxturePng from "../../assets/img/contact-txture.png";
import itemminusSvg from "../../assets/img/itemminus.svg";
import itemplusPng from "../../assets/img/itemplus.png";
import lockSvg from "../../assets/img/lock.svg";
import trashIconSvg from "../../assets/img/trash-icon.svg";
import kitPng from "../../assets/img/kit.png";
import {NavLink} from 'react-router-dom';

class ShoppingCart extends Component {
  constructor(props){
      super(props);
      this.state = {
        isOpen: false
      }
  }
  handleExpandCollapse = (evt) => {
    evt.preventDefault();
    this.setState(prevState => ({isOpen: !prevState.isOpen}))
  }

  handleApplyPromocode = (evt) => {
    console.log('Sudarshan');
    evt.preventDefault(); 
  }

  handleCheckoutClick = () => {
    this.props.history.push('/checkout')
  }
  render() {
    return (
        <div style={{marginTop: '85px'}}>
          <main className="shoppingcart">
            {/* <!-- breadcumb starts here -->	 */}
            <div className="breadcumb">
                <div className="container">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shopping_cart">Shopping Cart</NavLink></li>
                    </ul>
                </div>
            </div>

            {/* <!-- shopping section start here --> */}
            <section className="shopping">
                <div className="container">
                    <div className="heading">
                        <div className="headshop"><h1>Shopping Cart</h1></div>
                        <div className="server"> <img src={lockSvg} alt="lock"/> Secure Server</div>
                    </div>
                    {/* <!-- shoppingwrap start here --> */}
                    <div className="shoppingwrap">
                        <div className="shoppinglist">
                            <div className="flex">
                                <div className="column">
                                    <div className="productimg"><img src={kitPng} alt="kit"/> </div>
                                    <div className="productname">
                                        <a href="#">Vitamin B12</a>
                                        <div className="remove"> <a href="#"><img src={trashIconSvg} alt="trash-icon"/>Remove</a></div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="quantityprice">
                                        <div className="quantiyimg"><a href="#"><img src={itemminusSvg} alt=""/></a></div>
                                        <div className="quantiy">1</div>
                                        <div className="quantiyimg"><a href="#"><img src={itemplusPng} alt=""/></a></div>
                                        <div className="price">$199.00</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="column">
                                    <div className="productimg"><img src={kitPng} alt="kit"/> </div>
                                    <div className="productname">
                                        <a href="#">Ovarian reserve test (FSH)</a>
                                        <div className="remove"> <a href="#"><img src={trashIconSvg} alt="trash-icon"/>Remove</a></div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="quantityprice">
                                        <div className="quantiyimg"><a href="#"><img src={itemminusSvg} alt=""/></a></div>
                                        <div className="quantiy">1</div>
                                        <div className="quantiyimg"><a href="#"><img src={itemplusPng} alt=""/></a></div>
                                        <div className="price">$100.00</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="column">
                                    <div className="productimg"><img src={kitPng} alt="kit"/> </div>
                                    <div className="productname">
                                        <a href="#">Indoor & Outdoor allergy</a>
                                        <div className="remove"> <a href="#"><img src={trashIconSvg} alt="trash-icon"/>Remove</a></div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="quantityprice">
                                        <div className="quantiyimg"><a href="#"><img src={itemminusSvg} alt=""/></a></div>
                                        <div className="quantiy">1</div>
                                        <div className="quantiyimg"><a href="#"><img src={itemplusPng} alt=""/></a></div>
                                        <div className="price">$100.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ordersummary start here --> */}
                        <div className="ordersummary">
                            <h3>Order Summary</h3>
                            <div className="summarydetail">
                                <div className="itemtxt">Subtotal</div>
                                <div className="itemprice">$399.00</div>
                            </div>
                            <div className="summarydetail">
                                <div className="itemtxt">Shipping</div>
                                <div className="itemprice fontweight600">Free</div>
                            </div>
                            <div className="summarydetail">
                                <div className="itentxt ">Total</div>
                                <div className="itemprice fontweight600">$399.00</div>
                            </div>
                            <div className="promowrap">
                                <a className={`${this.state.isOpen ? '' : 'collapsed'}`} onClick={(e) => this.handleExpandCollapse(e)} href="#" role="button">Add promo code</a>
                                <div className={`collapse ${this.state.isOpen ? 'show' : ''}`} id="promocode">
                                    <div className="promobody">
                                        <p>use thulsee2021 to get 5% inauguration discount</p>
                                        <input type="text" id="code" name="promocode" placeholder="Code"/> 
                                        <a href="#" onClick={this.handleApplyPromocode}>Apply</a>
                                        <img id="promoclosed" src={closedSvg} alt="closed" onClick={(e) => this.handleExpandCollapse(e)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="summarydetail">
                                <div className="grandtotal fontweight600">Total</div>
                                <div className="itemprice fontweight600">$399.00</div>
                            </div>
                            <button type="submit" className="btncheckout" onClick={this.handleCheckoutClick}>Checkout</button>
                        </div>
                    </div>
                </div>
            </section>
          </main>
        </div>
    );
  }
}

export default ShoppingCart;