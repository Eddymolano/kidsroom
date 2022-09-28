import React from "react";
import styles from "./home.module.scss";
import MainPage from "../../components/main-page";
import { useLocation } from "react-router-dom";

const Home = () => {
 const {state} = useLocation();
 console.log("state: ", state);
  return (
    <MainPage id={state} >
      <div className={styles.home}>
        <div className={styles.title}>KIDSROOM</div>
        <div className={styles.video}>
          <iframe width="654" height="368" src="https://www.youtube.com/embed/GQcdbwouHxI" title="kidsroom"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </MainPage>
  )
}

export default Home;