import './Body.scss';
import { type ElementType, forwardRef, type ReactNode } from 'react';
import cx from 'classnames';
import type { PolymorphicComponentProp, PolymorphicRef } from './polymorphicUtility';

type TVariant = 1 | 2 | 3 | 4;

export type IBody = {
  variant?: TVariant;
};

export type BodyComponentType = <T extends ElementType = 'button'>(
  props: PolymorphicComponentProp<T, IBody> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;

export const Body: BodyComponentType = forwardRef(
  <T extends ElementType = 'p'>(
    { variant, as, ...props }: PolymorphicComponentProp<T, IBody>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component: ElementType = as || 'p';
    return (
      <Component ref={ref} {...props} className={cx(props.className, variant && `body_${Component}_${variant}`)} />
    );
  },
);
