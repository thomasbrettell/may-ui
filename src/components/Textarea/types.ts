import React from 'react';

export interface TextareaProps {
  value?: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  resize?: 'none' | 'horizontal' | 'vertical';
}
