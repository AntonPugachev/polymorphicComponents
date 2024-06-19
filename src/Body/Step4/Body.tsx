import './Body.scss';
import React, { type ElementType, forwardRef } from 'react';
import cx from 'classnames';

type TVariant = 1 | 2 | 3 | 4;
export type AsProp<T extends ElementType> = {
  as?: T;
};

type IBody<T extends ElementType> = React.HTMLAttributes<HTMLElement> &
  AsProp<T> & {
    variant?: TVariant;
  };
export type PolymorphicRef<T extends ElementType> = React.ComponentPropsWithRef<T>['ref'];

export const Body = forwardRef(
  <T extends ElementType = 'p'>({ variant, as, ...props }: IBody<T>, ref: PolymorphicRef<T>) => {
    const Component: ElementType = as || 'p';
    return <Component ref={ref} {...props} className={cx(props.className, variant && `body${variant}`)} />;
  },
);
