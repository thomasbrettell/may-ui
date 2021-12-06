import Check from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const CloseStory = {
  component: Check,
  title: 'Icons/Check'
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default CloseStory;
