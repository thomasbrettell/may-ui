import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
  args: {
    type: 'text',
  },
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Value',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};
