import styled from 'styled-components';
import { AvatarProps } from './type';
import colorIsLightOrDark from '../../util/colorIsLightOrDark';

export const Avatar = styled.span<AvatarProps>`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 9999px;
  vertical-align: top;
  width: ${(p) => p.size && p.theme.size.default[p.size]}px;
  height: ${(p) => p.size && p.theme.size.default[p.size]}px;
  background: ${(p) => p.color && p.theme.colors[p.color][50]};
`;

export const Image = styled.img`
  display: inline-block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  user-select: none;
`;

interface TextProps {
  size: string;
  bgColor: string;
}
export const Text = styled.span<TextProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  user-select: none;
  color: ${(p) =>
    colorIsLightOrDark(p.theme.colors[p.bgColor][50]) ? 'black' : 'white'};
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${(p) =>
    p.size && p.theme.size.default[p.size] / p.theme.size.default.xl}rem;
`;
