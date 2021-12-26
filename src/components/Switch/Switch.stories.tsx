import Switch from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    isChecked: false,
  },
  title: "Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
};
