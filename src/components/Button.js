const Button = ( {name} ) => {
  return (
    <button type="button" id={name} name={name}>{name}</button>);
};

export default Button;