import styles from './FlyingBox.module.css'

function FlyingBox({ children, className, ...props }) {
  return (
    <div className={`${styles.base} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default FlyingBox
