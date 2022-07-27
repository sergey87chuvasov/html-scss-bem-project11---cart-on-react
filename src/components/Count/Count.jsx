import './styles.scss';

const Count = ({count, increase, id}) => {
    return (  
        <div className="count">
            <div className="count__box">
              <input className="count__input" type="number" min="1" max="100" value={count} />
            </div>
            <div className="count__controls">
              <button className="count__up" type="button" onClick={() => {increase(id)}}>
                <img src="./img/icons/icon-up.svg" alt="increase pic" />
              </button>
              <button className="count__down" type="button" >
                <img src="./img/icons/icon-down.svg" alt="decrease pic" />
              </button>
            </div>

          </div>
    );
}
 
export default Count;