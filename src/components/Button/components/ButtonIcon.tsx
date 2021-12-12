import styled from 'styled-components';

interface ButtonIconProps {
  gap: string;
}

export default styled.div<ButtonIconProps>`
  display: inline-flex;
  ${(p) => p.gap}
`;
