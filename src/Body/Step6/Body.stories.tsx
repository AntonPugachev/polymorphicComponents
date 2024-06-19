import type { Meta } from '@storybook/react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Body } from './Body';

export default {
  title: 'Body/Step6-Finishing polymorphism',
  component: Body,
} as Meta;
export const Step6Demo = () => {
  return (
    <>
      <StoryItem description={'Body as p'} subtitle={'Adding forwardRef'}>
        <Body as={'p'} variant={1}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body as article'} subtitle={'Adding forwardRef'}>
        <Body as={'article'} variant={1}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body as span'} subtitle={'Adding forwardRef'}>
        <Body as={'span'} variant={1}>
          This is a component{' '}
        </Body>
      </StoryItem>
    </>
  );
};
