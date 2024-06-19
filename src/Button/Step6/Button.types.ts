import type { ElementType, ReactNode } from 'react';
import type { PolymorphicComponentProp, PolymorphicRef } from './polymorphicUtility';
// = ===================================================================================================================
// Additional literal types
// = ===================================================================================================================
type TVariants = 'destructive' | 'primary' | 'secondary';
type TIconVariants = 'plain' | 'outline' | 'destructive';
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

// = ====================================================================================================================
// Props types
// = ====================================================================================================================
export type ButtonPropsPolymorphic<T extends ElementType = 'button'> = PolymorphicComponentProp<
  T,
  ButtonProps & (ButtonPropsText | ButtonPropsIcon | ButtonPropsDefault | ButtonPropsBlank)
>;
export type ButtonPropsPolymorphicText<T extends ElementType = 'button'> = PolymorphicComponentProp<
  T,
  ButtonProps & Omit<ButtonPropsText, 'componentType'>
>;
export type ButtonPropsPolymorphicDefault<T extends ElementType = 'button'> = PolymorphicComponentProp<
  T,
  ButtonProps & Omit<ButtonPropsDefault, 'componentType'>
>;
export type ButtonPropsPolymorphicIcon<T extends ElementType = 'button'> = PolymorphicComponentProp<
  T,
  ButtonProps & Omit<ButtonPropsIcon, 'componentType'>
>;
export type ButtonPropsPolymorphicBlank<T extends ElementType = 'button'> = PolymorphicComponentProp<
  T,
  ButtonProps & Omit<ButtonPropsBlank, 'componentType'>
>;
// = ====================================================================================================================
// Component types
// = ====================================================================================================================
export type ButtonComponentType = <T extends ElementType = 'button'>(
  props: ButtonPropsPolymorphic<T> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;

export type TextButtonComponentType = <T extends ElementType = 'button'>(
  props: ButtonPropsPolymorphicText<T> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;
export type DefaultButtonComponentType = <T extends ElementType = 'button'>(
  props: ButtonPropsPolymorphicDefault<T> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;
export type IconButtonComponentType = <T extends ElementType = 'button'>(
  props: ButtonPropsPolymorphicIcon<T> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;
export type BlankButtonComponentType = <T extends ElementType = 'button'>(
  props: ButtonPropsPolymorphicBlank<T> & {
    ref?: PolymorphicRef<T>;
  },
) => ReactNode | null;
