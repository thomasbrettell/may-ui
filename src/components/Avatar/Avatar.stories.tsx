import Avatar from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  args: {},
  argTypes: {
    color: {
      options: ['purple', 'neutral', 'ink', 'red', 'green', 'yellow'],
      control: { type: 'radio' },
    },
  },
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Text = Template.bind({});
Text.args = {
  text: 'TB',
};

export const Image = Template.bind({});
Image.args = {
  src: 'https://avatars.githubusercontent.com/u/70102377?s=96&v=4',
};
