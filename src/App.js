import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";
import SignUpForm from "./routes/sign-up/sign-up-form.component";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import SignOut from "./routes/sign-out/sign-out.component";

const App = () => {
  return (
    //wrapping inside the create global contexts
    <UserProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUpForm />} />
            <Route path="sign-out" element={<SignOut />} />
          </Route>
        </Routes>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
