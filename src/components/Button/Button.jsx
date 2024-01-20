import useClassName from '@/hooks/useClassName'
import styles from './Button.module.css'

function Button({ children, className, primary, ...props }) {
  const baseClassName = `${className} ${useClassName(styles, [
    'base',
    primary && 'primary'
  ])}`

  return (
    <button className={baseClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
