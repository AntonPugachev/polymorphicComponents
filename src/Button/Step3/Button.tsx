import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  forwardRef,
  type PropsWithChildren,
} from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';
// common parts for polymorphic components
export type AsProp<T extends ElementType> = {
  as?: T;
};
export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];
// =========================================================================================================================================
export type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
/*
type TestPropsToOmit = PropsToOmit<'button', { onClick: () => void; type: string }>;
type TestPropsToOmit= "as" | "onClick" | "type"
*/
// =========================================================================================================================================
//
type PolymorphicComponentProp<C extends ElementType, Props = {}> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
/*
    Creates a type with children ,as, and Props from generic variable

    type testPropsWithChildren = PropsWithChildren<{ onClick: () => void; type: string } & AsProp<'button'>>;

    type testPropsWithChildren = { onClick: () => void; type: string } & AsProp<'button'> & {
        children?: ReactNode | undefined;
      };
*/
/*
    We should add to the type^^ all properties from the ElementType without defined in the props
    Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

 */
// =========================================================================================================================================
// button type
type ButtonProps = {
  text?: string;
};

export type ButtonPropsPolymorphic<T extends ElementType = 'button'> = PolymorphicComponentProp<T, ButtonProps>;

export const Button = forwardRef(
  <T extends ElementType = 'button'>({ as, text, ...props }: ButtonPropsPolymorphic<T>, ref: PolymorphicRef<T>) => {
    const Component = as || 'button';
    return (
      <Component ref={ref} {...props} className={cx(props.className, styles.button, styles['button--primary'])}>
        {text}
      </Component>
    );
  },
);
