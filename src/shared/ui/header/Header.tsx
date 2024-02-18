import React from 'react';

import { Button } from 'shared/ui';

import IconLogo from 'assets/svg/IconLogo.svg?react';

import s from './header.module.scss';

export function Header() {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <h1>Recipe Book</h1>
        <IconLogo />
      </div>
      <Button title="Создать рецепт" onClick={() => undefined} />
    </div>
  );
}
