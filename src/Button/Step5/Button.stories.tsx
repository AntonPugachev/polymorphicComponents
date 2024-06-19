import type { Meta } from '@storybook/react';
import StoryItem from '../../StorybookUtils/StoryItem';
import { Button } from './Button';
import AirplaneIcon from '../../assets/icons/Airplane';
export default {
  title: 'Button/Step5-Creating different buttons',
  component: Button,
} as Meta;

export const Step5Demo = () => {
  return (
    <>
      <StoryItem description={'Text button'} subtitle={'Creating different buttons'}>
        <Button componentType={'text'} text='This is  a button' size={'small'} />
        <Button componentType={'text'} text='This is  a button' size={'large'} />
      </StoryItem>
      <StoryItem description={'Icon button'}>
        <Button componentType={'icon'} icon={<AirplaneIcon />} size={'small'} />
        <Button componentType={'icon'} icon={<AirplaneIcon />} size={'medium'} />
        <Button componentType={'icon'} icon={<AirplaneIcon />} size={'large'} />
        <Button variant='outline' componentType={'icon'} icon={<AirplaneIcon />} size={'small'} />
        <Button variant='outline' componentType={'icon'} icon={<AirplaneIcon />} size={'medium'} />
        <Button variant='outline' componentType={'icon'} icon={<AirplaneIcon />} size={'large'} />
        <Button variant='destructive' componentType={'icon'} icon={<AirplaneIcon />} size={'small'} />
        <Button variant='destructive' componentType={'icon'} icon={<AirplaneIcon />} size={'medium'} />
        <Button variant='destructive' componentType={'icon'} icon={<AirplaneIcon />} size={'large'} />
      </StoryItem>
      <StoryItem description={'Default button'}>
        <Button componentType={'default'} text='This is  a button' size={'small'} />
        <Button componentType={'default'} text='This is  a button' size={'medium'} />
        <Button componentType={'default'} text='This is  a button' size={'large'} />
        <Button componentType={'default'} text='This is  a button' size={'small'} variant={'secondary'} />
        <Button componentType={'default'} text='This is  a button' size={'medium'} variant={'secondary'} />
        <Button componentType={'default'} text='This is  a button' size={'large'} variant={'secondary'} />
        <Button componentType={'default'} text='This is  a button' size={'small'} variant={'destructive'} />
        <Button componentType={'default'} text='This is  a button' size={'medium'} variant={'destructive'} />
        <Button componentType={'default'} text='This is  a button' size={'large'} variant={'destructive'} />
      </StoryItem>
    </>
  );
};
