import { type ElementType, forwardRef } from 'react';
import type { PolymorphicRef } from '../Step2/Button';
import { Button } from './Button';
import type {
  BlankButtonComponentType,
  ButtonPropsPolymorphicBlank,
  ButtonPropsPolymorphicDefault,
  ButtonPropsPolymorphicIcon,
  ButtonPropsPolymorphicText,
  DefaultButtonComponentType,
  IconButtonComponentType,
  TextButtonComponentType,
} from './Button.types';

export const TextButton: TextButtonComponentType = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonPropsPolymorphicText<T>, ref: PolymorphicRef<T>) => {
    return <Button ref={ref} {...props} componentType={'text'} />;
  },
);
export const DefaultButton: DefaultButtonComponentType = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonPropsPolymorphicDefault<T>, ref: PolymorphicRef<T>) => {
    return <Button ref={ref} {...props} componentType={'default'} />;
  },
);
export const IconButton: IconButtonComponentType = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonPropsPolymorphicIcon<T>, ref: PolymorphicRef<T>) => {
    return <Button ref={ref} {...props} componentType={'icon'} />;
  },
);

export const BlankButton: BlankButtonComponentType = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonPropsPolymorphicBlank<T>, ref: PolymorphicRef<T>) => {
    return <Button ref={ref} {...props} componentType={'blank'} />;
  },
);
