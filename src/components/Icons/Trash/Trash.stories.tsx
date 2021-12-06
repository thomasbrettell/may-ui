import Trash from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: Trash,
  title: 'Icons/Trash'
} as ComponentMeta<typeof Trash>;

const Template: ComponentStory<typeof Trash> = (args) => <Trash {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
