import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
  // Pages
  const SignInPage = React.lazy(() => import("../signInpage/signInpage"));
  const ProductPage = React.lazy(() => import("../ProductPage/productpage"));
  const CartPage = React.lazy(() => import("../CartPage/cartPage"));
const NavRoutes = () => {
    return (
      


<HashRouter>
<React.Suspense fallback={<div>Loading...</div>}>
  <Switch>
    <Route
      exact
      path="/"
      name="Sign In Page"
      render={(props) => <SignInPage {...props} />}
    />
    <Route
    exact=  "true"
    path="/products"
    name="Product Page"
    render={(props) => <ProductPage {...props} />}
    />
    <Route
      exact="true"
      path="/cart"
      name="Cart Page"
      render={(props) => <CartPage {...props}/>}
    />
    </Switch>
    </React.Suspense>
    </HashRouter>

    )
}


export default NavRoutes;

  