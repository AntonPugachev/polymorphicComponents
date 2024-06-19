import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';

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
export type PolymorphicComponentProp<C extends ElementType, Props = {}> = PropsWithChildren<Props & AsProp<C>> &
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
