import React, {FC} from 'react';
import './Button.css'

export interface ButtonProps {
    color?: string;
    title: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ color = 'blue', title, onClick, disabled}) => {
    let background: string;
    switch (color) {
        case 'red':
            background = '#ff1867'
            break;
        case 'blue':
            background = '#1e9bff'
            break;
        case 'green':
            background = '#6eff3e'
            break
        default: background = color
    }
    const rootClasses = ['customBtn']
    if (disabled) {
        rootClasses.push('disabled')
    }

    return (
        <button
            // @ts-ignore
            style={{'--clr': background}}
            onClick={() => disabled ? ({}) : onClick()}
            className={rootClasses.join(' ')}
        >
            <span>{title}</span>
            <i/>
        </button>
    );
};

export default Button;