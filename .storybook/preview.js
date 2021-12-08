import { addDecorator } from '@storybook/react';
import { withThemesProvider } from "themeprovider-storybook";
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../src/themes/default';
import '../src/index.css'

const themes = [defaultTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
