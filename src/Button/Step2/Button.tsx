import { type ComponentPropsWithRef, type ElementType, forwardRef, type HTMLAttributes } from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';
// common parts for polymorphic components
export type AsProp<T extends ElementType> = {
  as?: T;
};
export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

// button type
type IButton<T extends ElementType> = HTMLAttributes<HTMLElement> & {
  text?: string;
} & AsProp<T>;

export const Button = forwardRef(
  <T extends ElementType = 'button'>({ as, text, ...props }: IButton<T>, ref: PolymorphicRef<T>) => {
    const Component = as || 'button';
    return (
      <Component ref={ref} {...props} className={cx(props.className, styles.button, styles['button--primary'])}>
        {text}
      </Component>
    );
  },
);
