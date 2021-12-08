import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '.';

export default {
  args: {},
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select>
    <option value='volvo'>Volvo</option>
    <option value='saab'>Saab</option>
    <option value='mercedes'>Mercedes</option>
    <option value='audi'>Audi</option>
  </Select>
);

export const Default = Template.bind({});
