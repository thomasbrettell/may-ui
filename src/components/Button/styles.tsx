import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  line-height: 133.33333333333333%;
  letter-spacing: 0.4px;
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  padding: ${(p) => (p.iconButton ? '8px' : '8px 16px')};
  border: none;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: ${props.theme.colors.purple[50]};
          color: ${props.theme.colors.neutral.white};

          &:hover {
            background-color: ${props.theme.colors.purple[70]};
          }

          &:disabled {
            background-color: ${props.theme.colors.purple[20]};
          }

          &:focus {
            background-color: ${props.theme.colors.purple[70]};
            outline: 3px solid ${props.theme.colors.purple[10]};
          }

          &:active {
            background-color: ${props.theme.colors.purple[90]};
          }
        `;
      case 'secondary':
        return `
          background-color: ${props.theme.colors.neutral[50]};
          color: ${props.theme.colors.ink[50]};
          font-size: 12px;
          font-weight: bold;

          &:hover {
            background-color: ${props.theme.colors.neutral[60]};
          }

          &:disabled {
            background-color: ${props.theme.colors.neutral[50]};
            color: ${props.theme.colors.ink[30]};
          }

          &:focus {
            background-color: ${props.theme.colors.neutral[50]};
            outline: 3px solid ${props.theme.colors.purple[10]};
          }

          &:active {
            color: ${props.theme.colors.ink[60]};
            background-color: ${props.theme.colors.neutral[70]};
          }
        `;
      case 'tertiary':
        return `
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
        `;
      case 'warning':
        return `
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

          &:active {
            background-color: ${props.theme.colors.yellow[90]};
          }
        `;
      case 'danger':
        return `
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

          &:active {
            background-color: ${props.theme.colors.red[90]};
          }
      `;
    }
  }}
`;
