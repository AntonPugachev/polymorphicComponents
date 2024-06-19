import { type ElementType, forwardRef } from 'react';
import './Button.scss';
import cx from 'classnames';
import type { ButtonComponentType, ButtonPropsPolymorphic } from './Button.types';
import type { PolymorphicRef } from './polymorphicUtility';

// moved out types in the separate file

export const Button: ButtonComponentType = forwardRef(
  <T extends ElementType = 'button'>({ as, text, ...props }: ButtonPropsPolymorphic<T>, ref: PolymorphicRef<T>) => {
    const Component = as || 'button';
    return (
      <Component ref={ref} {...props} className={cx(props.className, 'button', 'button--primary')}>
        {text}
      </Component>
    );
  },
);
