import Button from '.';
import Home from '../Icons/Home';
import Check from '../Icons/Check';
import Close from '../Icons/Close';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  args: {
    disabled: false,
  },
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary',
  variant: 'tertiary',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  children: 'Left Icon',
  leftIcon: <Home />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  children: 'Right Icon',
  rightIcon: <Check />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  rightIcon: <Close />,
  variant: 'secondary',
};
