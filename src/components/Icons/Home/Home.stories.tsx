import Home from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: Home,
  title: 'Icons/Home'
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
