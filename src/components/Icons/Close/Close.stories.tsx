import Close from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const CloseStory = {
  component: Close,
  title: 'Icons/Close'
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = (args) => <Close {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default CloseStory;
