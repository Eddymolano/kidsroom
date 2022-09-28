import React, { useEffect, useState } from "react";
import styles from "./main-page.module.scss";
import Classnames from "classnames/bind";
import InicioLogo from "../../media/icons/inicio.svg";
import AlfabetoLogo from "../../media/icons/alfabeto.svg";
import NumerosLogo from "../../media/icons/numeros.svg";
import Logo from "../../media/icons/logo1.jpeg";
import { useNavigate } from "react-router-dom";
export interface IMainPage {
  children?: React.ReactNode;
  id?: number
}

const MainPage: React.FC<IMainPage> = ({ children, id }) => {
  const cx = Classnames.bind(styles);
  const [selected, setSelected] = useState<any>(-1);
  let navigate = useNavigate(); 
  const routeChange = (path: string, selected: number) =>{ 
    navigate(path, {state: selected});
  }
  const menuInfo = [
    {
      id: 0,
      label: "INICIO",
      onCLick: () => routeChange("/", 0),
      src: InicioLogo
    },
    {
      id: 1,
      label: "ALFABETO",
      onCLick: () => routeChange("/alfabeto", 1),
      src: AlfabetoLogo
    },
    {
      id: 2,
      label: "NÚMEROS",
      onCLick: () => routeChange("/numeros", 2),
      src: NumerosLogo
    }
  ];

  useEffect(() => {
    setSelected(id);
  }, [id])

  return (
    <div className={styles.mainPage}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
          {menuInfo.map((item, i) => <div key={i} onClick={() => {
            item.onCLick();
            setSelected(i);
          }} className={styles.menuItem}>
            <img src={item.src} alt="" />
            <label className={cx({
              slected: item.id === selected
            })}>{item.label}</label>
            </div>)}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default MainPage;