import styled from 'styled-components';
import { InputProps } from './types';

export const Input = styled.input<InputProps>`
  margin: 0;
  padding: 11px 16px;
  box-shadow: none;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0px;
  width: 100%;
  min-width: 0px;
  appearance: none;
  font-family: inherit;

  ${(p) => {
    if (p.disabled) {
      return `
        color: ${p.theme.colors.ink[30]};
        cursor: not-allowed;
      `;
    }
  }}

  &::placeholder {
    ${(p) => {
      if (p.error) {
        return `
          color: ${p.theme.colors.red[90]};
        `;
      }
      return `
        color: ${p.theme.colors.ink[30]};
      `;
    }}
  }
`;

export const Wrapper = styled.div<InputProps>`
  border-radius: 4px;
  display: inline-flex;
  vertical-align: middle;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  flex: 1 1 0%;
  user-select: none;
  color: ${(p) => p.theme.colors.ink[50]};
  transition: border 0.2s ease 0s, color 0.2s ease 0s;
  position: relative;
  border: 1px solid ${(p) => p.theme.colors.neutral[60]};

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
        cursor: not-allowed;
      `;
    }
    return `
      &:hover {
        border-color: ${p.theme.colors.purple[50]};
      }
    `;
  }}

  &:focus-within {
    ${(p) => {
      if (!p.error) {
        return `
          border-color: ${p.theme.colors.purple[50]};
          box-shadow: ${p.theme.colors.purple[10]} 0px 0px 0px 3px;
        `;
      }
    }}
  }
`;

export const Error = styled.div`
  margin-top: 5px;
  color: ${(p) => p.theme.colors.red[50]};
`;
