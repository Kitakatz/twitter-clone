export interface LogoutProps {
  ['data-testid']?: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};