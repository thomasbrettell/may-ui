import Image from './Image';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Story = {
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default Story;
