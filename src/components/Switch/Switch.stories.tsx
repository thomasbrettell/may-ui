import Switch from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {},
  title: "Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch />;

export const Default = Template.bind({});
