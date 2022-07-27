import './style.scss';
import Count from '../Count/Count';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

// деструктур props сразу ({product})

const Product = ({product}) => {
  // деструкт на отдельн переменн
  const {img, title, price, count, id} = product

    return (
        <section className="product">
        <div className="product__img">
          <img src={`./img/products/${img}`} alt={title}/>
        </div>
        <div className="product__title">
          {title}
        </div>
        <div className="product__count">

          {/* <Count /> */}

        </div>
        <div className="product__price"> 
          {price} руб.
        </div>
        <div className="product__controls">
          <ButtonDelete />
        </div>
        
      </section>

    )
}

export default Product