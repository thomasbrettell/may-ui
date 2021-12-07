import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
  args: {
    label: 'Default',
    placeholder: 'placeholder',
    type: 'text',
  },
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});