import React, { type CSSProperties, ReactNode } from 'react';
import './StoryItem.scss';

interface IProps {
  subtitle?: string;
  description?: ReactNode;
  children: ReactNode | ReactNode[];
  style?: Record<string, unknown>;
}

const StoryItem: React.FC<IProps> = ({ subtitle, style, description, children }: IProps) => {
  return (
    <div className='story__item'>
      {subtitle && <h4 className='story__subtitle'>{subtitle}</h4>}
      {description && <p className='story__description'>{description}</p>}
      <div className='story__content' style={style as CSSProperties}>
        {children}
      </div>
    </div>
  );
};

export default StoryItem;
