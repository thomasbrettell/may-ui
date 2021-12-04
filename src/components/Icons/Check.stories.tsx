import Check from './Check';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const CloseStory = {
  component: Check,
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default CloseStory;
