import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  line-height: 133.33333333333333%;
  letter-spacing: 0.4px;
  font-family: Inter;
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === 'primary' &&
    `
      background-color: ${props.theme.colors.purple[50]};
      color: ${props.theme.neutral.white};

      &:hover {
        background-color: ${props.theme.purple[70]};
      }

      &:disabled {
        background-color: ${props.theme.purple[20]};
      }

      &:focus {
        background-color: ${props.theme.purple[70]};
        outline: 3px solid ${props.theme.purple[10]};
      }

      &:active {
        background-color: ${props.theme.purple[90]};
      }
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
      background-color: ${props.theme.neutral[50]};
      color: ${props.theme.ink[50]};
      font-size: 12px;
      font-weight: bold;

      &:hover {
        background-color: ${props.theme.neutral[60]};
      }

      &:disabled {
        background-color: ${props.theme.theme.neutral[50]};
        color: ${props.theme.theme.ink[30]};
      }

      &:focus {
        background-color: ${props.theme.colors.neutral[50]};
        outline: 3px solid ${props.theme.colors.purple[10]};
      }

      &:active {
        color: ${props.theme.colors.ink[60]};
        background-color: ${props.theme.colors.neutral[70]};
      }
  `}

${(props) =>
    props.variant === 'tertiary' &&
    `
      padding: 8px 16px;
      background: none;
      color: ${props.theme.colors.purple[50]};
      font-size: 12px;
      font-weight: bold;

      &:hover {
        background-color: #EFEFEF;
        color: ${props.theme.colors.purple[70]};
      }

      &:disabled {
        background: none;
        color: ${props.theme.colors.purple[20]};
      }

      &:focus {
        color: ${props.theme.colors.purple[70]};
        outline: 3px solid ${props.theme.colors.purple[10]};
      }

      &:active {
        color: ${props.theme.colors.purple[90]};
        background-color: ${props.theme.colors.purple[10]};
      }
  `}

  ${(props) =>
    props.variant === 'warning' &&
    `
      background-color: ${props.theme.colors.yellow[50]};
      color: ${props.theme.colors.ink[50]};

      &:hover {
        background-color: ${props.theme.colors.yellow[70]};
      }

      &:disabled {
        background-color: ${props.theme.colors.yellow[20]};
        color: ${props.theme.colors.ink[40]};
      }

      &:focus {
        outline: 3px solid ${props.theme.colors.yellow[20]};
      }
  `}

  ${(props) =>
    props.variant === 'danger' &&
    `
      background-color: ${props.theme.colors.red[50]};
      color: ${props.theme.colors.neutral.white};

      &:hover {
        background-color: ${props.theme.colors.red[70]};
      }

      &:disabled {
        background-color: ${props.theme.colors.red[20]};
      }

      &:focus {
        outline: 3px solid ${props.theme.colors.red[20]};
      }
  `}
`;
