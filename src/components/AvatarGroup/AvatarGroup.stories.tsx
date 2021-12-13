import AvatarGroup from '.';
import Avatar from '../Avatar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  args: {},
  title: 'AvatarGroup',
  component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup {...args}>
    <Avatar text='t1' />
    <Avatar text='t2' />
    <Avatar src='https://avatars.githubusercontent.com/u/70102377?s=96&v=4' />
    <Avatar color='green' text='cb' />
    <Avatar color='red' text='ws' />
    <Avatar color='yellow' text='tr' />
    <Avatar color='red' text='yj' />
  </AvatarGroup>
);

export const Default = Template.bind({});

export const WithMax = Template.bind({});
WithMax.args = {
  max: 3,
};
