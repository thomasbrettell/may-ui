import ChevronDown from './ChevronDown';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ChevronDownStory = {
  component: ChevronDown,
} as ComponentMeta<typeof ChevronDown>;

const Template: ComponentStory<typeof ChevronDown> = (args) => <ChevronDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default ChevronDownStory;
