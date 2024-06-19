import './Body.scss';
import React, { type ElementType } from 'react';
import cx from 'classnames';

type TVariant = 1 | 2 | 3 | 4;
export type AsProp<T extends ElementType> = {
  as?: T;
};

type IBody<T extends ElementType> = React.HTMLAttributes<HTMLElement> &
  AsProp<T> & {
    variant?: TVariant;
  };

export const Body = <T extends ElementType = 'p'>({ variant, as, ...props }: IBody<T>) => {
  const Component: ElementType = as || 'p';
  return <Component {...props} className={cx(props.className, variant && `body${variant}`)} />;
};
