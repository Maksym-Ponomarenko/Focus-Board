import React, {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    width?: string;
    height?: string;
    children: React.ReactNode;
    btnType?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> =
    ({children, color = 'blue', height = '40px', width = '100px', className, ...rest})=> {
    const buttonClass = [
        styles.button,
        className || ''
    ].join(' ');

    return (
        <button
            className={buttonClass}
            style={
                {
                    '--btn-color': color,
                    '--btn-width': width,
                    '--btn-height': height,
                } as React.CSSProperties
            }
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
