import React from "react";
import styles from "./numeros.module.scss";
import MainPage from "../../components/main-page";
import { useLocation } from "react-router-dom";
import cero from  "../../media/images/numeros/0-numero.png";
import uno from  "../../media/images/numeros/1-numero.png";
import dos from  "../../media/images/numeros/2-numero.png";
import tres from  "../../media/images/numeros/3-numero.png";
import cuatro from  "../../media/images/numeros/4-numero.png";
import cinco from  "../../media/images/numeros/5-numero.png";
import seis from  "../../media/images/numeros/6-numero.png";
import siete from  "../../media/images/numeros/7-numero.png";
import ocho from  "../../media/images/numeros/8-numero.png";
import nueve from  "../../media/images/numeros/9-numero.png";
import diez from  "../../media/images/numeros/10-numero.jpg";


const Numeros = () => {
  const {state} = useLocation();

  const numerosData = [
    {
      id: 0,
      src: cero
    },
    {
      id: 1,
      src: uno
    },
    {
      id: 2,
      src: dos
    },
    {
      id: 3,
      src: tres
    },
    {
      id: 4,
      src: cuatro
    },
    {
      id: 5,
      src: cinco
    },
    {
      id: 6,
      src: seis
    },
    {
      id: 7,
      src: siete
    },
    {
      id: 8,
      src: ocho
    },
    {
      id: 9,
      src: nueve
    },
    {
      id: 10,
      src: diez
    }
  ]

  return (
    <MainPage id={state} >
      <div className={styles.numeros}>
      {numerosData.map((item, i) => (
          <div className={styles.item} key={i} >
            <img src={item.src} alt="" />
          </div>
        ))}
      </div>
    </MainPage>
  );
};

export default Numeros;