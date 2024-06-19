import type { Meta } from '@storybook/react';
import { useRef } from 'react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Button } from './Button';

export default {
  title: 'Button/Step2 - Adding refs to the button',
  component: Button,
} as Meta;
export const Step2Demo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <>
      <StoryItem description={'Button as button'} subtitle={'Adding refs to the button'}>
        <Button ref={buttonRef} as={'button'} text='this is button' />
      </StoryItem>
      <StoryItem description={'Button as link'}>
        {/* @ts-expect-error */}
        <Button ref={linkRef} as={'a'} text='this is link' href={'#'} />
      </StoryItem>
    </>
  );
};
