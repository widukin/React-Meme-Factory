const TextInput = ( {name} ) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input 
        type="text" 
        id={name} 
        name={name}
        placeholder={`insert meme ${name} here`}
      />
    </div>);
};

export default TextInput;