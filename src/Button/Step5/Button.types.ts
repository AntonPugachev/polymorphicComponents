import type { ElementType, ReactNode } from 'react';
import type { PolymorphicComponentProp, PolymorphicRef } from './polymorphicUtility';
// = ===================================================================================================================
// Additional literal types
// = ===================================================================================================================
export const DefaultButtonVariants = ['destructive', 'primary', 'secondary'] as const;
type TVariants = (typeof DefaultButtonVariants)[number];
export const IconButtonVariants = ['plain', 'outline', 'destructive'] as const;
type TIconVariants = (typeof IconButtonVariants)[number];
type sizes = 'small' | 'medium' | 'large';
// = ===================================================================================================================
type ButtonProps = {
  text?: string;
};
export interface ButtonPropsText {
  componentType: 'text';
  size?: 'small' | 'large';
  children?: null;
}
export interface ButtonPropsIcon {
  componentType: 'icon';
  size?: sizes;
  children?: null;
  icon: ReactNode;
  variant?: TIconVariants;
}
export interface ButtonPropsDefault {
  componentType?: 'default';
  size?: sizes;
  variant?: TVariants;
  children?: null;
}

export interface ButtonPropsBlank {
  componentType: 'blank';
  children?: ReactNode;
}

// = ===================================================================================================================
export type ButtonComponentType = <T extends ElementType = 'button'>(
  props: ButtonPropsPolymorphic<T> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;

export type ButtonPropsPolymorphic<T extends ElementType = 'button'> = PolymorphicComponentProp<
  T,
  ButtonProps & (ButtonPropsText | ButtonPropsIcon | ButtonPropsDefault | ButtonPropsBlank)
>;
