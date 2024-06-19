import { type ElementType, forwardRef } from 'react';
import './Button.scss';
import cx from 'classnames';
import type { ButtonComponentType, ButtonPropsPolymorphic } from './Button.types';
import type { PolymorphicRef } from './polymorphicUtility';

// moved out types in the separate file

export const Button: ButtonComponentType = forwardRef(
  <T extends ElementType = 'button'>(
    { as, size, text, icon, children, componentType = 'default', variant, ...props }: ButtonPropsPolymorphic<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || 'button';
    const sizeClass = size ? `button__size--${size}` : null;
    const componentTypeClass = componentType ? `button__type--${componentType}` : null;
    let variantClass = variant ? `button__variant--${variant}` : null;
    !variantClass && componentType === 'icon' && (variantClass = 'button__variant--plain');
    !variantClass && componentType === 'default' && (variantClass = 'button__variant--primary');
    return (
      <Component
        ref={ref}
        {...props}
        className={cx(props.className, 'button', sizeClass, componentTypeClass, variantClass)}
      >
        {icon && icon}
        {text && <div className='button__text'>{text}</div>}
        {children && !text && <div className='button__text'>{children}</div>}
      </Component>
    );
  },
);
