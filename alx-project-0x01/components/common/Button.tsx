import React from "react";

interface ButtonProps {
    title: string;
    onClick?: () => void;
};
const Button: React.FC<ButtonProps> = ({title, onClick}) => {
    return (
        <button>
            {title}
        </button>
    )
}
export default Button