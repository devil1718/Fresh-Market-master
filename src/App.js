import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import NotFound from './Components/NotFound/NotFound';
import Barnds from './Components/Barnds/Barnds';
import Categories from './Components/Categories/Categories';
import { UserContext } from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';
import Profile from './Components/Profile/Profile';
import { Provider } from 'react-redux';
import { mtore, store } from './Redux/Store';
import CategoriesDeteilas from './Components/CategoriesDeteilas/CategoriesDeteilas';


let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute> <Home /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'cart', element: <ProtectedRoute>  <Cart />  </ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute> <Products />   </ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute> <Barnds />   </ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute>  <Categories />  </ProtectedRoute> },
      { path: 'profile', element: <ProtectedRoute>  <Profile />  </ProtectedRoute> },
      { path: 'ProductDetails/:id', element: <ProtectedRoute>  <ProductDetails />  </ProtectedRoute> },
      { path: 'CategoriesFetuer/:id', element: <ProtectedRoute>  <CategoriesDeteilas/>  </ProtectedRoute> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

export default function App() {
  let { setUserToken } = useContext(UserContext)
  useEffect(() => {// handel user refresh
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'))
    }
  }, []);
  return (
    < >

      <CartContextProvider>
        <Provider store={mtore}>
          <RouterProvider router={routers} ></RouterProvider>
          <Toaster position="top-right"
            reverseOrder={false} />
        </Provider>
      </CartContextProvider>
    </>
  )
}
