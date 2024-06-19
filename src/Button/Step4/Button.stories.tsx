import type { Meta } from '@storybook/react';
import { useRef } from 'react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Button } from './Button';

export default {
  title: 'Button/Step4-Finishing polymorphism',
  component: Button,
} as Meta;
export const Step4Demo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <StoryItem description={'Button as button'} subtitle={'Finishing work with polymorphism'}>
        <Button ref={buttonRef} as={'button'} text='this is button' />
      </StoryItem>
      <StoryItem description={'Button as link'}>
        <Button ref={linkRef} as={'a'} text='this is link' href={'#'} />
      </StoryItem>
      <StoryItem description={"Button as div( div shouldn't contain href prop)"}>
        <Button ref={divRef} as={'div'} text='this is link' />
      </StoryItem>
    </>
  );
};
