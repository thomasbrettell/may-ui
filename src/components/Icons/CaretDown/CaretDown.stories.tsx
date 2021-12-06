import CaretDown from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const CaretDownStory = {
  component: CaretDown,
  title: 'Icons/CaretDown'
} as ComponentMeta<typeof CaretDown>;

const Template: ComponentStory<typeof CaretDown> = (args) => <CaretDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

export default CaretDownStory;
