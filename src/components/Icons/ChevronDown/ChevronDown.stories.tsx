import ChevronDown from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ChevronDownStory = {
  component: ChevronDown,
  title: 'Icons/ChevronDown'
} as ComponentMeta<typeof ChevronDown>;

const Template: ComponentStory<typeof ChevronDown> = (args) => <ChevronDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default ChevronDownStory;
