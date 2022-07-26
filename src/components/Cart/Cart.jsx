const Cart = () => {
    return (
        <section className="cart">
          <header className="cart-header">
            <div className="cart-header__title">наименование</div>
            <div className="cart-header__count">количество</div>
            <div className="cart-header__cost">стоимость</div>
          </header>

          <section className="product">
            <div className="product__img">
              <img src="./img/products/macbook.jpg" alt="Apple MacBook Air 13 pic" />
            </div>
            <div className="product__title">
              Apple MacBook Air 13
            </div>
            <div className="product__count">

              <div className="count">
                <div className="count__box">
                  <input className="count__input" type="number" min="1" max="100" value="1" />
                </div>
                <div className="count__controls">
                  <button className="count__up" type="button">
                    <img src="./img/icons/icon-up.svg" alt="increase pic" />
                  </button>
                  <button className="count__down" type="button">
                    <img src="./img/icons/icon-down.svg" alt="decrease pic" />
                  </button>
                </div>

              </div>
            </div>
            <div className="product__price"> 
              110 000 руб.
            </div>
            <div className="product__controls">
              <button type="button">
                <img src="./img/icons/close.svg" alt="delete pic" />
              </button>
            </div>
            
          </section>
          <section className="product">
            <div className="product__img">
              <img src="./img/products/apple_watch.jpg" alt="Apple watch pic" />
            </div>
            <div className="product__title">
              Apple watch
            </div>
            <div className="product__count">

              <div className="count">
                <div className="count__box">
                  <input className="count__input" type="number" min="1" max="100" value="1" />
                </div>
                <div className="count__controls">
                  <button className="count__up" type="button">
                    <img src="./img/icons/icon-up.svg" alt="increase pic" />
                  </button>
                  <button className="count__down" type="button">
                    <img src="./img/icons/icon-down.svg" alt="decrease pic" />
                  </button>
                </div>

              </div>
            </div>
            <div className="product__price"> 
              29 000 руб.
            </div>
            <div className="product__controls">
              <button type="button">
                <img src="./img/icons/close.svg" alt="delete pic" />
              </button>
            </div>
            
          </section>
          <section className="product">
            <div className="product__img">
              <img src="./img/products/mac_pro.jpg" alt="Mac Pro pic" />
            </div>
            <div className="product__title">
              Mac Pro
            </div>
            <div className="product__count">

              <div className="count">
                <div className="count__box">
                  <input className="count__input" type="number" min="1" max="100" value="1" />
                </div>
                <div className="count__controls">
                  <button className="count__up" type="button">
                    <img src="./img/icons/icon-up.svg" alt="increase pic" />
                  </button>
                  <button className="count__down" type="button">
                    <img src="./img/icons/icon-down.svg" alt="decrease pic" />
                  </button>
                </div>

              </div>
            </div>
            <div className="product__price"> 
              190 000 руб.
            </div>
            <div className="product__controls">
              <button type="button">
                <img src="./img/icons/close.svg" alt="delete pic" />
              </button>
            </div>
            
          </section>

          <footer className="cart-footer">
            <div className="cart-footer__count">3 единицы</div>
            <div className="cart-footer__price">329 000 руб.</div>
          </footer>
        </section>
    )
}

export default Cart