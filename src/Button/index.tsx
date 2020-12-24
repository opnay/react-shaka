import React from 'react';
import './button.css';

interface Props extends React.ComponentProps<'button'> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FunctionComponent<Props> = (props) => {
    const { primary, backgroundColor, size, className, ...restProps } = props;
    const classNames = React.useMemo(() => [
        'storybook-button',
        `storybook-button--${size}`,
        primary ? 'storybook-button--primary' : 'storybook-button--secondary',
        className
    ].join(' '), [size, primary, className]);

    return <button className={classNames} {...restProps} />;
};

export default Button;
