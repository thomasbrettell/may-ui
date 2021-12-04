import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ButtonStory = {
  args: {
    disabled: false,
  },
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

export default ButtonStory;
