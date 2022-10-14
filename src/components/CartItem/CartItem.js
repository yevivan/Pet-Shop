
import styles from './CartItem.module.scss';
import Button from '../Button'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const dispatch = useDispatch()
        const { title, img, count, id, incrementCartItem, dicrementCartItem, toggleModal, setModalProps } = props

        return (
            <div className={styles.cartItem}>
                <div className={styles.contentContainer}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.itemAvatar} src={img}
                             alt={title}/>
                    </div>
                </div>
                <span className={styles.quantity}>{count}</span>
                <div className={styles.btnContainer}>
                    <Button onClick={() => dispatch(incrementCartItem(id))} className={styles.btn}>+</Button>
                    <Button onClick={() => dispatch(dicrementCartItem(id))} className={styles.btn}>-</Button>
                    <Button onClick={() => {
                        dispatch(setModalProps({ id, title }));
                        dispatch(toggleModal(true));
                    }} color="red" className={styles.btn}>DEL</Button>
                </div>

            </div>
        )
    
}



export default CartItem;

CartItem.propTypes = {
    incrementCartItem: PropTypes.func,
    dicrementCartItem: PropTypes.func,
    id: PropTypes.number,
    count: PropTypes.number,
};



CartItem.defaultProps = {
    title: "Item",
    isFavorite: false,
    count: 0,
};