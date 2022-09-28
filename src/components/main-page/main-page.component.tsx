import React from "react";
import styles from "./main-page.module.scss";
import Classnames from "classnames/bind";
import InicioLogo from "../../media/icons/inicio.svg";
import AlfabetoLogo from "../../media/icons/alfabeto.svg";
import NumerosLogo from "../../media/icons/numeros.svg";


export interface IMainPage {
  children?: React.ReactNode;
}

const MainPage: React.FC<IMainPage> = ({ children }) => {
  const cx = Classnames.bind(styles);
  const menuInfo = [
    {
      label: "INICIO",
      onCLick: () => void 0,
      src: InicioLogo,
      selected: true
    },
    {
      label: "ALFABETO",
      onCLick: () => void 0,
      src: AlfabetoLogo,
      selected: false
    },
    {
      label: "NÚMEROS",
      onCLick: () => void 0,
      src: NumerosLogo,
      selected: false
    }
  ];

  return (
    <div className={styles.mainPage}>
      <div className={styles.menu}>
          {menuInfo.map((item, i) => <div key={i} onClick={item.onCLick} className={styles.menuItem}>
            <img src={item.src} alt="" />
            <label className={cx({
              slected: item.selected
            })}>{item.label}</label>
            </div>)}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default MainPage;