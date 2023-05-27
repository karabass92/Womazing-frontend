import Main from "../pages/Main/Main";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Contacts from "../pages/Contacts/Contacts";
import Product from "../pages/Product/Product";
import SuccessCheckout from "../pages/SuccessCheckout/SuccessCheckout";


const routes = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/shop',
        element: <Shop />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: '/product/:productId',
        element: <Product />
    },
    {
        path: '/succescheckout',
        element: <SuccessCheckout />
    },
]


export default routes;