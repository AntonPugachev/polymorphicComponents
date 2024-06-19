import type { Meta } from '@storybook/react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Body } from './Body';

export default {
  title: 'Body/Step1 - Basic implementation',
  component: Body,
} as Meta;
export const Step1Demo = () => {
  return (
    <>
      <StoryItem description={'Body1 as div'} subtitle={'Basic implementation'}>
        <Body variant={1}>This is a component </Body>
      </StoryItem>
      <StoryItem description={'Body2as div'}>
        <Body variant={2}>This is a component </Body>
      </StoryItem>
      <StoryItem description={'Body3 as div'}>
        <Body variant={3}>This is a component </Body>
      </StoryItem>
      <StoryItem description={'Body4 as div'}>
        <Body variant={4}>This is a component </Body>
      </StoryItem>
    </>
  );
};
