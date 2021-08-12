import classes from './MainHeader.module.css';
import CartButtom from '../Cart/CartButton';

const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <h2>Redux Cart</h2>
            <nav>
                <ul>
                    <li>
                        <CartButtom />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;