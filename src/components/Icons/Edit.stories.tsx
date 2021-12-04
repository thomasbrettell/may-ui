import Edit from './Edit';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const EditStory = {
  component: Edit,
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = (args) => <Edit {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default EditStory;
