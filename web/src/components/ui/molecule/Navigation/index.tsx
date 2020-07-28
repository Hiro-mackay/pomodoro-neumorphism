import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Grid } from "../Grid";

const NAV_ITEM_SIZE = 70;

type INavigation = {
  pathname?: string;
  children: React.ReactNode;
  [key: string]: any;
};

export const Navigation = (props: INavigation) => {
  return (
    <>
      <NavigationConatiner>
        <Grid columns={4} columnGap={20}>
          <NavigationItem>
            <Button style={{ width: NAV_ITEM_SIZE, height: NAV_ITEM_SIZE }}>
              Home
            </Button>
          </NavigationItem>
          <NavigationItem>
            <Button style={{ width: NAV_ITEM_SIZE, height: NAV_ITEM_SIZE }}>
              Todo
            </Button>
          </NavigationItem>
          <NavigationItem>
            <Button style={{ width: NAV_ITEM_SIZE, height: NAV_ITEM_SIZE }}>
              Ana
            </Button>
          </NavigationItem>
          <NavigationItem>
            <Button style={{ width: NAV_ITEM_SIZE, height: NAV_ITEM_SIZE }}>
              Sett
            </Button>
          </NavigationItem>
        </Grid>
      </NavigationConatiner>
      {props.children}
    </>
  );
};

const NavigationConatiner = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 420px;
  padding: 30px 20px;
  box-sizing: border-box;
`;

// const NavigationGrid = styled.div`
//   width: auto;
//   height: auto;
//   display: grid;
//   grid-column-gap: 20px;
//   grid-template-columns: repeat(4, 2fr);
// `;

const NavigationItem = styled.div`
  text-align: center;
`;
