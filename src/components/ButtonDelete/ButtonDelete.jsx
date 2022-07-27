const ButtonDelete = ({deleteProduct, id}) => {
    return (  
        <button type="button" onClick={() => {deleteProduct(id)}}>
            <img src="./img/icons/close.svg" alt="delete pic" />
          </button>
    );
}
 
export default ButtonDelete;