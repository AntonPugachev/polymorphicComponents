import React, { type CSSProperties, ReactNode } from 'react';
import './StoryItem.scss';

interface IProps {
  subtitle?: string;
  description?: ReactNode;
  children: ReactNode | ReactNode[];
}

const StoryItem: React.FC<IProps> = ({ subtitle, description, children }: IProps) => {
  const flexLayout = { display: 'flex', gap: '1rem', flexWrap: 'wrap' };
  return (
    <div className='story__item'>
      {subtitle && <h4 className='story__subtitle'>{subtitle}</h4>}
      {description && <p className='story__description'>{description}</p>}
      <div className='story__content' style={flexLayout as CSSProperties}>
        {children}
      </div>
    </div>
  );
};

export default StoryItem;
