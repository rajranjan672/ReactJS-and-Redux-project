import classes from './Cart.module.css';
import CartItem from './CartItem';
import Card from '../UI/Card';
import { useSelector } from 'react-redux';

const Cart = (props) => {
    const cartItem =useSelector(state => state.cart.items);
    return(
        <Card className={classes.cart}>
            <h2>Your shopping Cart</h2>
            <ul>
                {cartItem.map((item) => (
                     <CartItem
                     key={item.id}
                item={{id: item.id,title: item.name, quantity: item.quantity, total:item.totalPrice, price:item.price,
                }}
                />
                ))}
               
            </ul>
        </Card>
    );
};

export default Cart;