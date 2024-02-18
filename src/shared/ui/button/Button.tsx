import React from 'react';

import s from './button.module.scss';

type PropsType = {
  title: string
  onClick: () => void
  disabled?: boolean
  isSubmit?: boolean
};

export function Button({
  title, onClick, disabled, isSubmit,
}: PropsType) {
  return (
    <button
      className={s.button}
      onClick={onClick}
      disabled={disabled}
      type={isSubmit ? 'submit' : 'button'}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  isSubmit: false,
};
