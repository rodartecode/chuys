import * as React from 'react';
import { StyledBurger } from './Burger.styled';

type BurgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Burger = (props: BurgerProps): JSX.Element => {
  return (
    <StyledBurger open={props.open} onClick={(): void => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
