import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './UI/Home'
import Error from './UI/Error'

import Menu, { loader as menuLoader } from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order, { loader as orderLoader } from './features/order/Order'
import CreateOrder, {
    action as createOrderAction,
} from './features/order/CreateOrder'
import AppLayout from './UI/AppLayout'
import { action as updateOrderAction } from './features/order/UpdateOrder'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,

        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/order/new',
                element: <CreateOrder />,
                action: createOrderAction,
            },
            {
                path: '/order/:orderId',
                element: <Order />,
                loader: orderLoader,
                action: updateOrderAction,
                errorElement: <Error />,
            },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router} />
}
