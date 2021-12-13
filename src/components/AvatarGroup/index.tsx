import { AvatarGroup as Box } from './styles';
import { FC, Children, isValidElement, cloneElement } from 'react';
import Avatar from '../Avatar';
import { AvatarGroupProps } from './types';
const avatarComponentType = (<Avatar />).type;

const AvatarGroup: FC<AvatarGroupProps> = ({ children, max }) => {
  const excess = max != null && Children.count(children) - max;
  return (
    <Box>
      {Children.map(children, (child, i) => {
        if (
          isValidElement(child) &&
          child.type === avatarComponentType &&
          (max ? i < max : true)
        ) {
          return cloneElement(child, {
            isPartOfGroup: true,
          });
        }
      })}
      {excess > 0 && (
        <Avatar text={`+${excess}`} isPartOfGroup={true} color={'neutral'} />
      )}
    </Box>
  );
};

export default AvatarGroup;
