import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChevronDown from './ChevronDown';
import CaretDown from './CaretDown';

const ChevronDownStory = {
  args: {
    disabled: false,
  },
  component: ChevronDown
} as ComponentMeta<typeof ChevronDown>;