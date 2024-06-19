import type { Meta } from '@storybook/react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Body } from './Body';

export default {
  title: 'Body/Step2 - Basic polymorphism',
  component: Body,
} as Meta;
export const Step2Demo = () => {
  return (
    <>
      <StoryItem description={'Body1 as p'} subtitle={'Basic polymorphism'}>
        <Body as={'p'} variant={1}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body2 as span'}>
        <Body as={'span'} variant={2}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body3 as article'}>
        <Body as={'article'} variant={3}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body4 as h1'}>
        <Body as={'h1'} variant={4}>
          This is a component{' '}
        </Body>
      </StoryItem>
    </>
  );
};
