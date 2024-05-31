// components/Title.tsx
import React from 'react';
import styles from './styles.module.css';

interface TitleProps {
    text: string;
    size: 'small' | 'medium' | 'large';
}

const Title: React.FC<TitleProps> = ({ text, size }) => {
    let variant;

    switch (size) {
        case 'small':
            variant = styles.small;
            break;
        case 'medium':
            variant = styles.medium;
            break;
        case 'large':
            variant = styles.large;
            break;
        default:
            variant = styles.medium;
    }

    return <h1 className={`${styles.title} ${variant}`}>{text}</h1>;
};

export default Title;
