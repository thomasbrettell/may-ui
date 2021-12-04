import Home from './Home';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
