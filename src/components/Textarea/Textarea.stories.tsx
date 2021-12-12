import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textarea from '.';

export default {
  args: {},
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'Default',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'Disabled',
};
