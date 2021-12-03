import styled from 'styled-components';
import { ButtonProps } from './types';
import defaultTheme from '../../themes/default';

export const Button = styled.button<ButtonProps>`
  line-height: 133.33333333333333%;
  letter-spacing: 0.4px;
  font-family: Inter;
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px 16px;
  border: none;

  ${(props) =>
    props.variant === 'primary' &&
    `
      background-color: ${defaultTheme.colors.purple[50]};
      color: ${defaultTheme.colors.neutral.white};

      &:hover {
        background-color: ${defaultTheme.colors.purple[70]};
        cursor: pointer;
      }

      &:disabled {
        background-color: ${defaultTheme.colors.purple[20]};
        cursor: not-allowed;
      }

      &:focus {
        background-color: ${defaultTheme.colors.purple[70]};
        outline: 3px solid ${defaultTheme.colors.purple[10]};
      }

      &:active {
        background-color: ${defaultTheme.colors.purple[90]};
      }
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
      background-color: ${defaultTheme.colors.neutral[50]};
      color: ${defaultTheme.colors.ink[50]};
      font-size: 12px;
      font-weight: bold;

      &:hover {
        background-color: ${defaultTheme.colors.neutral[60]};
        cursor: pointer;
      }

      &:disabled {
        background-color: ${defaultTheme.colors.neutral[50]};
        color: ${defaultTheme.colors.ink[30]};
        cursor: not-allowed;
      }

      &:focus {
        background-color: ${defaultTheme.colors.neutral[50]};
        outline: 3px solid ${defaultTheme.colors.purple[10]};
      }

      &:active {
        color: ${defaultTheme.colors.ink[60]};
        background-color: ${defaultTheme.colors.neutral[70]};
      }
  `}

${(props) =>
    props.variant === 'tertiary' &&
    `
      padding: 8px 16px;
      background: none;
      color: ${defaultTheme.colors.purple[50]};
      font-size: 12px;
      font-weight: bold;

      &:hover {
        background-color: #EFEFEF;
        color: ${defaultTheme.colors.purple[70]};
        cursor: pointer;
      }

      &:disabled {
        background: none;
        color: ${defaultTheme.colors.purple[20]};
        cursor: not-allowed;
      }

      &:focus {
        color: ${defaultTheme.colors.purple[70]};
        outline: 3px solid ${defaultTheme.colors.purple[10]};
      }

      &:active {
        color: ${defaultTheme.colors.purple[90]};
        background-color: ${defaultTheme.colors.purple[10]};
      }
  `}
`;
