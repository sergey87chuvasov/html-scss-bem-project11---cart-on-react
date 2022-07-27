import {useState} from 'react'
import CartFooter from "../CartFooter/CartFooter"
import CartHeader from "../CartHeader/CartHeader"
import Product from "../Product/Product"
import data from '../../data.js'

const Cart = () => {

    const [cart, setCart] = useState(data)

    // console.log(data);
    // console.log(cart);

    const products = cart.map((product) => {
        return <Product product={product} key={product.id} />
    })

    return (
        <section className="cart">

        <CartHeader />

         {products}
         
        <CartFooter />

        </section>
    )
}

export default Cart