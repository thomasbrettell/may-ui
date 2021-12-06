import Edit from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const EditStory = {
  component: Edit,
  title: 'Icons/Edit'
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = (args) => <Edit {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default EditStory;
