import Play from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: Play,
  title: 'Icons/Play'
} as ComponentMeta<typeof Play>;

const Template: ComponentStory<typeof Play> = (args) => <Play {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
