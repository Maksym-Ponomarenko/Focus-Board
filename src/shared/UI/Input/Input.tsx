import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<IInputProps> = ({ label, error, className, ...rest }) => {
    const fieldClassName = [
        styles.input__field,
        error ? styles['input__field--error'] : '',
        className || ''
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={styles.input} {...rest}>
            {label && <label className={styles.input__label}>{label}</label>}

            <input
                className={fieldClassName}
                {...rest}
            />

            {error && <p className={styles.input__error}>{error}</p>}
        </div>
    );
};

export default Input;
