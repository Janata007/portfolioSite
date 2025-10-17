const Text =({
    children, 
    size = 'm',
    as: Component = 'span',
    align = 'auto',
    weight = 'auto',
    className,
    ...rest
})=>{
 return (
    <Component
      className="text"
      data-align={align}
      data-size={size}
      data-weight={weight}
      {...rest}
    >
      {children}
    </Component>
  );
}
export default Text;