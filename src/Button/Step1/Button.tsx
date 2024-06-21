import type { ElementType, HTMLAttributes } from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';
interface IButton extends HTMLAttributes<HTMLElement> {
  text?: string;
  as?: ElementType;
}

export const Button = ({ as, text, ...props }: IButton) => {
  const Component: ElementType = as || 'button';
  return (
    <Component {...props} className={cx(props.className, styles.button, styles['button--primary'])}>
      {text}
    </Component>
  );
};
