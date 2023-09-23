import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [numerouno, setNumerouno] = useState(null);
  const [numerodos, setNumerodos] = useState(null);
  const operacion = useRef(null);
  const numeroactual = useRef(1);

  function boton(numero) {
    if (numeroactual.current == 1) {
      setNumerouno(numerouno + numero);
    } else {
      setNumerodos(numerodos + numero);
    }
  }
  
  function igual() {
    if (operacion.current == "+") {
      setNumerouno(numerouno + numerodos);
      
    } else if (operacion.current == "-") {
      setNumerouno(numerouno - numerodos);
     
    } else if (operacion.current == "*") {
      setNumerouno(numerouno * numerodos);
      
    } else if (operacion.current == "/") {
      setNumerouno(numerouno / numerodos);
    }
    numeroactual.current = 1;
    borrar();
  
  }
  function borrar() {
    setNumerodos(null);
    setNumerouno(null);
  }
  
  function botonfuncionalidad(operacion) {
    if (!numerouno == null) {
      operacion.current = operacion;
      numeroactual.current = 2;
  }
  }

  return (
    
    <>
      <Head>
        <title>Calculadora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.calculadora}>
          <div className={styles.lbls}>
            <h2>{numerouno} {operacion.current} {numerodos}</h2>
          </div>
          <div className={styles.funcionalidad}>
            <div className={styles.btnsnumeros}>
              <button onClick={boton(1)} >1</button>
              <button onClick={boton(2)} >2</button>
              <button onClick={boton(3)} >3</button>
              <button onClick={boton(4)} >4</button>
              <button onClick={boton(5)} >5</button>
              <button onClick={boton(6)} >6</button>
              <button onClick={boton(7)} >7</button>
              <button onClick={boton(8)} >8</button>
              <button onClick={boton(9)} >9</button>
            </div>
            <div className={styles.btns}>
              <button onClick ={borrar}>C</button>
              <button onClick={botonfuncionalidad("+")}>+</button>
              <button onClick={botonfuncionalidad("-")}>-</button>
              <button onClick={botonfuncionalidad("*")}>*</button>
              <button onClick={botonfuncionalidad("/")}>/</button>
              <button onClick={igual}>=</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

