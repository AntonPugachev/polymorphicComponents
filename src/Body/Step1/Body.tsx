import './Body.scss';
import React from 'react';
import cx from 'classnames';

type TVariant = 1 | 2 | 3 | 4;
interface IBody extends React.HTMLAttributes<HTMLElement> {
  variant?: TVariant;
}
export const Body = ({ variant, ...props }: IBody) => {
  const Component = 'div'; // span|p|h|article
  return <Component {...props} className={cx(props.className, variant && `body${variant}`)} />;
};
