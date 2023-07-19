import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'


export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  console.log(cart)
  
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
        <div className={styles.session}>
          <Subtitle>Promoções</Subtitle>
          <div className={styles.salecontainer}>
            <SaleCard 
              image={'league-of-legends.jpg'}
              discount={30}
              fullPrice={199.9}
              onAdd={() => handleAddProduct({name: 'League of Legends',
                                             price: 99.9,
                                             image: 'league-of-legends.jpg'})}
            />
            <SaleCard 
              image={'dota-2.jpg'}
              discount={40}
              fullPrice={299.9}
              onAdd={() => handleAddProduct({name: 'Dota 2',
                                             price: 99.9,
                                             image: 'dota-2.jpg'})}
            />
            <SaleCard 
              image={'valorant.jpg'}
              discount={50}
              fullPrice={399.9}
              onAdd={() => handleAddProduct({name: 'Valorant',
                                             price: 99.9,
                                             image: 'valorant.jpg'})}
            />
          </div>
        </div>  
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
          <div className={styles.gamecontainer}>
            <GameCard onAdd={() => handleAddProduct({ name: 'Counter Strike',
                                                      price: 99.9,
                                                      image: 'counter-strike.jpg' }) } />
          </div>
        </div>  
        </Container>
      </div>
      
    </>
  )
}
