import './Body.scss';
import React, { type ElementType } from 'react';
import cx from 'classnames';

type TVariant = 1 | 2 | 3 | 4;
interface IBody extends React.HTMLAttributes<HTMLElement> {
  variant?: TVariant;
  as?: ElementType; // 'div' | 'span' | 'h' | 'article' | 'aside';
}
export const Body = ({ variant, as, ...props }: IBody) => {
  const Component: ElementType = (as as ElementType) || 'span';
  return <Component {...props} className={cx(props.className, variant && `body${variant}`)} />;
};
