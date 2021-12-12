import styled from 'styled-components';
import { TextareaProps } from './types';

export const Textarea = styled.textarea<TextareaProps>`
  border: red 1px solid;
  font-family: inherit;
  padding: 11px 16px;
  margin: 0;
  background-color: transparent;
  outline: none;
  appearance: none;
  border: 1px solid ${(p) => p.theme.colors.neutral[60]};
  border-radius: 4px;
  font-size: 1rem;
  resize: ${(p) => p.resize};

  ${(p) => {
    if (p.error) {
      return `
        border-color: ${p.theme.colors.red[50]};
        background: ${p.theme.colors.red[10]};
      `;
    } else if (p.disabled) {
      return `
        border-color: ${p.theme.colors.neutral[60]};
        background: ${p.theme.colors.neutral[50]};
        color: ${p.theme.colors.ink[30]};
        cursor: not-allowed;
      `;
    }
    return `
      &:hover {
        border-color: ${p.theme.colors.purple[50]};
      }
    `;
  }}

  &::placeholder {
    color: ${(p) => p.theme.colors.ink[30]};
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colors.purple[50]};
    box-shadow: ${(p) => p.theme.colors.purple[10]} 0px 0px 0px 3px;
  }
`;

export const Error = styled.div`
  margin-top: 5px;
  color: ${(p) => p.theme.colors.red[50]};
`;
