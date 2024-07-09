import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.base}>
      <span>
        Powered by&nbsp;
        <a href='https://github.com/SedrakyanVahe/' target='_blank' rel='noreferrer'>
          Vahe
        </a>
      </span>
    </div>
  )
}

export default Footer
