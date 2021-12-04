import More from './More';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: More,
} as ComponentMeta<typeof More>;

const Template: ComponentStory<typeof More> = (args) => <More {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
