export interface InputProps {
  error?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email';
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
