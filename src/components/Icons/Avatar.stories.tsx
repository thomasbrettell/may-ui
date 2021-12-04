import Avatar from './Avatar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
