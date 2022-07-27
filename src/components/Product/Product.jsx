import './style.scss';
import Count from '../Count/Count';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

// деструктур props сразу ({product})

const Product = ({product, deleteProduct, increase}) => {
  // деструкт на отдельн переменн
  const {img, title, priceTotal, count, id} = product

    return (
        <section className="product">
        <div className="product__img">
          <img src={`./img/products/${img}`} alt={title}/>
        </div>
        <div className="product__title">
          {title}
        </div>
        <div className="product__count">

          <Count count={count} increase={increase} id={id}/>

        </div>
        <div className="product__price"> 
          {priceTotal} руб.
        </div>
        <div className="product__controls">
          <ButtonDelete deleteProduct={deleteProduct} id={id} />
        </div>
        
      </section>

    )
}

export default Product