import type { ElementType, ReactNode } from 'react';
import type { PolymorphicComponentProp, PolymorphicRef } from './polymorphicUtility';

type ButtonProps = {
  text?: string;
};

export type ButtonComponentType = <T extends ElementType = 'button'>(
  props: ButtonPropsPolymorphic<T> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;

export type ButtonPropsPolymorphic<T extends ElementType = 'button'> = PolymorphicComponentProp<T, ButtonProps>;
