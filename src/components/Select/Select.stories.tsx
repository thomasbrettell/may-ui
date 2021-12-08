import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '.';

const exampleOptions = [
  { label: 'Example 1', value: 1 },
  { label: 'Example 2', value: 2 },
];

export default {
  args: {},
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    {exampleOptions.map((el) => (
      <option key={el.value} value={el.value}>
        {el.label}
      </option>
    ))}
  </Select>
);

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
