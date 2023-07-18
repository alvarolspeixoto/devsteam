import styles from './saleCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice }) {

    return (
        <div className={styles.salecard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300}/>
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percentual}>-{discount}%</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>{fullPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                        <h4 className={styles.discountprice}>{(fullPrice * (1 - (discount/100))).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h4>
                    </div>
                </div>
                <Button fullWidth={true}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps = {
    image: 'league-of-legends.jpg',
    discount: 0,
    fullPrice: 199.9,
}