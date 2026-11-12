import { cx } from '@/lib/utils';
import './Button.css';

const buttonVariant = Object.freeze({
  primary: 'primary',
  outline: 'outline',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  ghost: 'ghost',
});

const buttonSize = Object.freeze({
  sm: 'sm',
  md: 'md',
  lg: 'lg',
});

export const Button = ({
  type = 'button',
  variant = buttonVariant.primary,
  size = buttonSize.md,
  fullWidth = false,
  className = '',
  ...props
}) => (
  <button
    type={type}
    className={cx(
      'button',
      variant,
      size,
      fullWidth && 'full-width',
      className,
    )}
    {...props}
  />
);

Button.variant = buttonVariant;
Button.size = buttonSize;
