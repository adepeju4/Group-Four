import styles from "./stylesheets/about.module.css";
import React from 'react';
import TopBar from "./Components/Navbar/TopBar";
import Footer from "./Components/Footer";

const About = () => {
    return (
        <div className={styles.about_cont}>
            <div className={styles.hero}>
                <TopBar />
            </div>

            <div className={styles.body}>
                <div className={styles.about_text}>

                    <h1><span></span> About Us </h1>

                    <p className={styles.firstP} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                    <br></br>

                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

                </div>

                <img src="/assets/about-food.png" alt="Food Image" className={styles.food_img} />


            </div>

            <Footer />

        </div>

    )
}

export default About;
