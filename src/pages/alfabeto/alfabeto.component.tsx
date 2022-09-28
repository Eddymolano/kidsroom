import React from "react";
import styles from "./alfabeto.module.scss";
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

const Alfabeto = () => {
  const {state} = useLocation();

  const alfabetoData = [
    {
      id: 0,
      src: a
    },
    {
      id: 1,
      src: b
    },
    {
      id: 3,
      src: c
    },
    {
      id: 4,
      src: d
    },
    {
      id: 5,
      src: e
    },
    {
      id: 6,
      src: f
    },
    {
      id: 7,
      src: g
    },
    {
      id: 8,
      src: h
    },
    {
      id: 9,
      src: i
    },
    {
      id: 10,
      src: j
    },
    {
      id: 11,
      src: k
    },
    {
      id: 12,
      src: l
    },
    {
      id: 13,
      src: m
    },
    {
      id: 14,
      src: n
    },
    {
      id: 15,
      src: ñ
    },
    {
      id: 16,
      src: o
    },
    {
      id: 17,
      src: p
    },
    {
      id: 18,
      src: q
    },
    {
      id: 19,
      src: r
    },
    {
      id: 20,
      src: s
    },
    {
      id: 21,
      src: t
    },
    {
      id: 22,
      src: u
    },
    {
      id: 23,
      src: v
    },
    {
      id: 24,
      src: w
    },
    {
      id: 25,
      src: x
    },
    {
      id: 26,
      src: y
    },
    {
      id: 27,
      src: z
    },
  ]

  return (
    <MainPage id={state} >
      <div className={styles.alfabeto}>
        {alfabetoData.map((item, i) => (
          <div className={styles.item} key={i} >
            <img src={item.src} alt="" />
          </div>
        ))}
      </div>
    </MainPage>
  );
};

export default Alfabeto;