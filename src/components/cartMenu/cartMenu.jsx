import styles from './cartMenu.module.css'
import CartOption from '../cartOption/cartOption'

export default function CartMenu({ cart, onRemove }) {
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                {
                    cart.length === 0 && <p>Nenhum produto no seu carrinho</p>
                }
                {
                    cart.map((cartInfo, pos) => 
                    <CartOption 
                        image={cartInfo.image}
                        title={cartInfo.name}
                        price={cartInfo.price}
                        onRemove={() => onRemove(pos)}
                        key={`cart-info-${pos}`}
                    />
                    )
                }
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}> {cart.reduce(
                                                (prev, current) => prev + current.price, 0).toLocaleString('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}</h2>
            </div>
        </div>
    )
}