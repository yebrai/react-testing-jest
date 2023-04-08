import { useState } from "react";

const TextBox = () => {

    const [bgColor, setBgColor] = useState('indigo')

  return (
    <div>
      <article title="párrafo principal"
      style={{backgroundColor: bgColor}}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        praesentium eos sunt hic obcaecati vitae temporibus natus! Architecto
        eum, quaerat, magni vitae aliquam quisquam corporis, amet perspiciatis
        nam laudantium voluptatum.
      </article>
      <button 
      onClick={()=> {bgColor === 'indigo' && setBgColor('tomato')}}
      >Pulsa para modificar</button>
    </div>
  );
};

export default TextBox;
