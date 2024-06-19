import type { Meta } from '@storybook/react';
import { useRef } from 'react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Body } from './Body';

export default {
  title: 'Body/Step4- Move to generics',
  component: Body,
} as Meta;
export const Step4Demo = () => {
  const pRef = useRef<HTMLParagraphElement>();
  const spanRef = useRef<HTMLSpanElement>();
  const hRef = useRef<HTMLHeadingElement>();
  const articleRef = useRef<HTMLElement>();

  return (
    <>
      <StoryItem description={'Body3 as p'} subtitle={'Adding forwardRef'}>
        <Body ref={pRef} as={'p'} variant={1}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body2 as span'}>
        <Body ref={spanRef} as={'span'} variant={2}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body3 as article'}>
        <Body ref={articleRef} as={'article'} variant={3}>
          This is a component{' '}
        </Body>
      </StoryItem>
      <StoryItem description={'Body4 as h1'}>
        <Body ref={hRef} as={'h1'} variant={4}>
          This is a component{' '}
        </Body>
      </StoryItem>
    </>
  );
};
