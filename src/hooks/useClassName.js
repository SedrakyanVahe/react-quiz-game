function useClassName(styles, classes) {
  const className = classes.map((name) => (name ? styles[name] : '')).join(' ')
  return className
}

export default useClassName
