export interface AvatarProps {
  src?: string;
  text?: string;
  size?: 'md' | 'lg' | 'xl';
  color?: 'purple' | 'neutral' | 'ink' | 'red' | 'green' | 'yellow';
  isPartOfGroup?: boolean;
}
