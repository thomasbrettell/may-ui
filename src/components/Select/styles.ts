import styled from 'styled-components';
import { SelectProps } from './types';

export const Select = styled.select<SelectProps>`
  margin: 0;
  padding: 11px 16px;
  box-shadow: none;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 100%;
  min-width: 0px;
  appearance: none;
  font-family: inherit;
  border: 1px solid ${(p) => p.theme.colors.neutral[60]};
  padding-inline-end: 2rem;
  position: relative;
  outline: transparent solid 2px;
  outline-offset: 2px;

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

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ChevronWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  right: 0.5rem;
`;
