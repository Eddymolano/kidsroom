import React, { useEffect, useState } from "react";
import styles from "./enviar-mensaje.module.scss";
import MainPage from "../../components/main-page";
import { useLocation } from "react-router-dom";
import a from  "../../media/images/alfabeto/a-imagen.jpg";
import b from  "../../media/images/alfabeto/b-imagen.jpg";
import c from  "../../media/images/alfabeto/c-imagen.jpg";
import d from  "../../media/images/alfabeto/d-imagen.jpg";
import e from  "../../media/images/alfabeto/e-imagen.jpg";
import f from  "../../media/images/alfabeto/f-imagen.jpg";
import g from  "../../media/images/alfabeto/g-imagen.jpg";
import h from  "../../media/images/alfabeto/h-imagen.jpg";
import i from  "../../media/images/alfabeto/i-imagen.jpg";
import j from  "../../media/images/alfabeto/j-imagen.jpg";
import k from  "../../media/images/alfabeto/k-imagen.jpg";
import l from  "../../media/images/alfabeto/l-imagen.jpg";
import m from  "../../media/images/alfabeto/m-imagen.jpg";
import n from  "../../media/images/alfabeto/n-imagen.jpg";
import ñ from  "../../media/images/alfabeto/n2-imagen.jpg";
import o from  "../../media/images/alfabeto/o-imagen.jpg";
import p from  "../../media/images/alfabeto/p-imagen.jpg";
import q from  "../../media/images/alfabeto/q-imagen.jpg";
import r from  "../../media/images/alfabeto/r-imagen.jpg";
import s from  "../../media/images/alfabeto/s-imagen.jpg";
import t from  "../../media/images/alfabeto/t-imagen.jpg";
import u from  "../../media/images/alfabeto/u-imagen.jpg";
import v from  "../../media/images/alfabeto/v-imagen.jpg";
import w from  "../../media/images/alfabeto/w-imagen.jpg";
import x from  "../../media/images/alfabeto/x-imagen.jpg";
import y from  "../../media/images/alfabeto/y-imagen.jpg";
import z from  "../../media/images/alfabeto/z-imagen.jpg";

export type TAlfabeto = {
  id: number;
  letra: string;
  src: string;
};

const EnviarMensaje = () => {
  const {state} = useLocation();
  const [value, setValue] = useState("");
  const [result, setResult] = useState<TAlfabeto[]>([]);
  const [index, setIndex] = useState(-1);
  console.log("index: ", index);

  console.log("result: ", result);

  const alfabetoData = [
    {
      id: 0,
      letra: "a",
      src: a
    },
    {
      id: 1,
      letra: "b",
      src: b
    },
    {
      id: 3,
      letra: "c",
      src: c
    },
    {
      id: 4,
      letra: "d",
      src: d
    },
    {
      id: 5,
      letra: "e",
      src: e
    },
    {
      id: 6,
      letra: "f",
      src: f
    },
    {
      id: 7,
      letra: "g",
      src: g
    },
    {
      id: 8,
      letra: "h",
      src: h
    },
    {
      id: 9,
      letra: "i",
      src: i
    },
    {
      id: 10,
      letra: "j",
      src: j
    },
    {
      id: 11,
      letra: "k",
      src: k
    },
    {
      id: 12,
      letra: "l",
      src: l
    },
    {
      id: 13,
      letra: "m",
      src: m
    },
    {
      id: 14,
      letra: "n",
      src: n
    },
    {
      id: 15,
      letra: "ñ",
      src: ñ
    },
    {
      id: 16,
      letra: "o",
      src: o
    },
    {
      id: 17,
      letra: "p",
      src: p
    },
    {
      id: 18,
      letra: "q",
      src: q
    },
    {
      id: 19,
      letra: "r",
      src: r
    },
    {
      id: 20,
      letra: "s",
      src: s
    },
    {
      id: 21,
      letra: "t",
      src: t
    },
    {
      id: 22,
      letra: "u",
      src: u
    },
    {
      id: 23,
      letra: "v",
      src: v
    },
    {
      id: 24,
      letra: "w",
      src: w
    },
    {
      id: 25,
      letra: "x",
      src: x
    },
    {
      id: 26,
      letra: "y",
      src: y
    },
    {
      id: 27,
      letra: "z",
      src: z
    },
    {
      id: 27,
      letra: " ",
      src: ""
    }
  ];

  const filtrarBusqueda = () => {
    if (result.length > 0) setResult([]);
    if (index !== -1) setIndex(-1);
    if (value !== "") {
      let valueArray = value.split('');
      let result = [];
      for (let i = 0; i < valueArray.length; i++) {
        for (let j = 0; j < alfabetoData.length; j++) {
          if(valueArray[i].toLocaleLowerCase() === alfabetoData[j].letra) result.push(alfabetoData[j]);
        }
      }
      setResult(result);
      setTimeout(() =>  setIndex(0), 500);
    }
  }

  useEffect(() => {
    if (index < result.length - 1) {
      const interval = setInterval(() => {
        setIndex(index + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <MainPage id={state} >
      <div className={styles.enviarMensaje}>
        <div className={styles.header}>{`Letra: ${index >= 0 && result.length > 0 ? result[index].letra : ""}`}</div>
        <div className={styles.images}>
          {index >= 0 && result.length > 0 && <img src={result[index].src} alt="" />}
        </div>
        <div className={styles.bottom}>
          <input
            className={styles.textbox}
            min={0}
            max={50}
            name={"text"}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Escribe tu mensaje"}
            type={"text"}
            value={value}
          />
          <div className={styles.button} onClick={() => filtrarBusqueda()} >Enviar mensaje</div>
        </div>
      </div>
    </MainPage>
  )
};

export default EnviarMensaje;