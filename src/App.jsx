import GMCNavigation from './components/header/GMCNavigation'
import { Routes, Route } from "react-router-dom";
import HomePage from './components/home/HomePage';
import Services from './components/service/Services';
import Product from './components/product/Product';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import NotFound from './components/pagenotfound/NotFound';
import ProductDetails from './components/product/ProductDetails';
import AddProduct from './components/product/AddProduct';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';

function App() {
  
  return (
    <>
    {/*navigation bar*/}
    <GMCNavigation />
    

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/service' element={<Services />} />
      <Route path='/product' element={<Product />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/product/:id' element={< ProductDetails />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />

      <Route path='/*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
