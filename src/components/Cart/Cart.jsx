import {useState} from 'react'
import CartFooter from "../CartFooter/CartFooter"
import CartHeader from "../CartHeader/CartHeader"
import Product from "../Product/Product"
import data from '../../data.js'

const Cart = () => {

    const [cart, setCart] = useState(data)

    // console.log(data);
    // console.log(cart);

    const deleteProduct = (id) => {
        // console.log('delete', id);
        setCart((cart) =>  cart.filter((product) =>  id !== product.id))
    }

    const increase = (id) => {
        console.log('increase', id);

        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
					return {
						...product,
						count: product.count + 1,
						priceTotal: (product.count + 1) * product.price,
					};
				}
				return product;
            })
        })
    }

    const decrease = (id) => {
        console.log('decrease', id);

        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {

                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

					return {
						...product,
						count: newCount,
						priceTotal: newCount * product.price,
					};
				}
				return product;
            })
        })
    }

    const products = cart.map((product) => {
        return <Product product={product} key={product.id} deleteProduct={deleteProduct} increase={increase} decrease={decrease}/>
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