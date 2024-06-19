import type { Meta } from '@storybook/react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Button } from './Button';
import AirplaneIcon from '../../assets/icons/Airplane';
import { BlankButton, DefaultButton, IconButton, TextButton } from './ButtonWrappers';
export default {
  title: 'Button/Step6 - Creating a separate components',
  component: Button,
} as Meta;

export const Step6Demo = () => {
  const flexLayout = { display: 'flex', gap: '1rem', flexWrap: 'wrap' };
  return (
    <>
      <StoryItem style={flexLayout} description={'Text button'} subtitle={'Creating a separate components'}>
        <TextButton text='This is  a button' size={'small'} />
        <TextButton text='This is  a button' size={'large'} />
      </StoryItem>
      <StoryItem style={flexLayout} description={'Icon button'}>
        <IconButton icon={<AirplaneIcon />} size={'small'} />
        <IconButton icon={<AirplaneIcon />} size={'medium'} />
        <IconButton icon={<AirplaneIcon />} size={'large'} />
        <IconButton variant='outline' icon={<AirplaneIcon />} size={'small'} />
        <IconButton variant='outline' icon={<AirplaneIcon />} size={'medium'} />
        <IconButton variant='outline' icon={<AirplaneIcon />} size={'large'} />
        <IconButton variant='destructive' icon={<AirplaneIcon />} size={'small'} />
        <IconButton variant='destructive' icon={<AirplaneIcon />} size={'medium'} />
        <IconButton variant='destructive' icon={<AirplaneIcon />} size={'large'} />
      </StoryItem>
      <StoryItem style={flexLayout} description={'Default button'}>
        <DefaultButton text='This is  a button' size={'small'} />
        <DefaultButton text='This is  a button' size={'medium'} />
        <DefaultButton text='This is  a button' size={'large'} />
        <DefaultButton text='This is  a button' size={'small'} variant={'secondary'} />
        <DefaultButton text='This is  a button' size={'medium'} variant={'secondary'} />
        <DefaultButton text='This is  a button' size={'large'} variant={'secondary'} />
        <DefaultButton text='This is  a button' size={'small'} variant={'destructive'} />
        <DefaultButton text='This is  a button' size={'medium'} variant={'destructive'} />
        <DefaultButton text='This is  a button' size={'large'} variant={'destructive'} />
      </StoryItem>
      <StoryItem style={flexLayout} description={'Blank button'}>
        <BlankButton> This is a button</BlankButton>
      </StoryItem>
    </>
  );
};
