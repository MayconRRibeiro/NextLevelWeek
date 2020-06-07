import React from "react";

// Interface é uma forma de definir a tipagem de um objeto/tipoPrimitivo
interface HeaderProps {
  title: string;
}

// FC = Function Component
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
