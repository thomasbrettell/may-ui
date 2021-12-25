import styled from "styled-components";
import { SwitchProps } from "./types";

export const Label = styled.label`
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;

export const Input = styled.input`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;

export const Track = styled.span<SwitchProps>`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 4px;
  width: 3rem;
  height: 1.5rem;
  background: ${(p) => p.theme.colors.neutral[60]};
  border-radius: 9999px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;

  ${(p) =>
    p.isChecked &&
    `
    background: ${p.theme.colors.purple[50]};
  `}

  &:active,
  &:focus,
  &:focus-within {
    outline: 3px solid ${(p) => p.theme.colors.purple[10]};
  }
`;

export const Thumb = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  background: white;
  transition: transform 0.1s ease;
  border-radius: 9999px;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`;

export const TrackWrapper = styled.div<SwitchProps>`
  display: flex;
  transform: translateX(calc(-3rem + 1.5rem));
  transition: transform 0.1s ease;

  ${(p) =>
    p.isChecked &&
    `
    transform: translateX(0);
  `}
`;
