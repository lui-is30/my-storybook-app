import React, { useState } from "react";


type ButtonProps = {
    label: string;
    onClick: () => void;
    isDisabled:boolean|null;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick,isDisabled=false }) => {

        
    const [localDisabled, setLocalDisabled] = useState(false);

    const handleClick = () => {
     
      if (isDisabled === null) {
        setLocalDisabled(true);
  
       
        setTimeout(() => {
          onClick();
          setLocalDisabled(false);
        }, 5000);
      } else {
       
        onClick();
      }
    };
  
    return (
      <button onClick={handleClick} disabled={isDisabled === true || localDisabled}>
        {label}
      </button>
    );
};