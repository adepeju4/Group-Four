import styles from "../stylesheets/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>

        <div>
          <p>Company</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>

        <div>
          <p>About</p>
          <p>Company Team</p>
          <p>Blog</p>
        </div>

        <div>
          <p>SIGN UP TO OUR NEWSLETTER</p>

          <input
            type="text"
            className={styles.footer_input}
            placeholder="Your email address"
          />
        </div>

        <div>
          <p>Download foodine</p>

          <img className={styles.download} src="/assets/AppStore.png" />

          <img className={styles.download} src="/assets/GooglePlay.png" />
        </div>

        <div>
          <p>CONTACT US</p>
          <p>+234123456789</p>
          <p>+234123456789</p>
        </div>

        <div>
          <p>Join us on</p>
          <img src="/assets/facebook.png" className={styles.facebook} />
          <img src="/assets/twitter.png" className={styles.twitter} />
          <img src="/assets/instagram.png" className={styles.instagram} />
          <img src="/assets/youtube.png" className={styles.youtube} />
        </div>
        
      </div>
    </>

  );
};

export default Footer;
