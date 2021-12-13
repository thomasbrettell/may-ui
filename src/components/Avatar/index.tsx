import { AvatarProps } from './type';
import { FC } from 'react';
import { Avatar as Box, Image, Text } from './styles';

const Avatar: FC<AvatarProps> = ({
  src,
  text,
  size = 'lg',
  color = 'purple',
  isPartOfGroup,
  ...props
}) => {
  return (
    <Box size={size} color={color} isPartOfGroup={isPartOfGroup}>
      {src && <Image alt='Avatar' src={src} {...props} />}
      {!src && (
        <Text bgColor={color} size={size}>
          {text?.slice(0, 2)}
        </Text>
      )}
    </Box>
  );
};

export default Avatar;
