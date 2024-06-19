import type { Meta } from '@storybook/react';
import { useRef } from 'react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Button } from './Button';

export default {
  title: 'Button/Step3 - Extending types',
  component: Button,
} as Meta;
export const Step3Demo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <>
      <StoryItem description={'Button as button'} subtitle={'Extending types'}>
        <Button ref={buttonRef} as={'button'} text='this is button' />
      </StoryItem>
      <StoryItem description={'Button as link'}>
        <Button ref={linkRef} as={'a'} text='this is link' href={'#'} />
      </StoryItem>
      <StoryItem description={"Button as div( div shouldn't contain href prop)"}>
        {/* div shouldn't contain href prop */}
        <Button ref={linkRef} as={'div'} text='this is link' href={'#'} />
      </StoryItem>
    </>
  );
};
