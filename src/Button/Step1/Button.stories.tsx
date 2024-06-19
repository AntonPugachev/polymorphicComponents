import type { Meta } from '@storybook/react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Button } from './Button';

export default {
  title: 'Button/Step1 - Basic implementation',
  component: Button,
} as Meta;
export const Step1Demo = () => {
  return (
    <>
      <StoryItem description={'Button as button'} subtitle={'Basic implementation'}>
        <Button as={'button'} text='this is button' />
      </StoryItem>
      <StoryItem description={'Button as link'}>
        {/* @ts-expect-error */}
        <Button as={'a'} text='this is link' href={'#'} />
      </StoryItem>
    </>
  );
};
