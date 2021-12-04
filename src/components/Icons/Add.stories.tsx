import Add from './Add';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: Add,
} as ComponentMeta<typeof Add>;

const Template: ComponentStory<typeof Add> = (args) => <Add {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
