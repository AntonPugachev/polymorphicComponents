import './Body.scss';
import React, { type ComponentPropsWithoutRef, type ElementType, forwardRef, type PropsWithChildren } from 'react';
import cx from 'classnames';

type TVariant = 1 | 2 | 3 | 4;
//  __________________common part to polymorphic components____________________________________________________________
export type AsProp<T extends ElementType> = {
  as?: T;
};
export type PolymorphicRef<T extends ElementType> = React.ComponentPropsWithRef<T>['ref'];

export type PropsToOmit<T extends ElementType, Props = {}> = keyof (AsProp<T> & Props);
type PolymorphicComponentProp<T extends ElementType, Props = {}> = PropsWithChildren<Props & AsProp<T>> &
  Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;
//  __________________Body part_________________________________________________________________________________________
export type IBody = {
  variant?: TVariant;
};

export const Body = forwardRef(
  <T extends ElementType = 'p'>(
    { variant, as, ...props }: PolymorphicComponentProp<T, IBody>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component: ElementType = as || 'p';
    return <Component ref={ref} {...props} className={cx(props.className, variant && `body${variant}`)} />;
  },
);
