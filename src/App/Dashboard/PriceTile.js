import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../../Shared/Styles";
import { CoinHeaderGridStyled } from "../../Settings/CoinHeaderGrid";
import { AppContext } from "../AppProvider";

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;
const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;
const numberFormat = (number) => {
  return +(number + "").slice(0, 7);
};

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3}
      grid-gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      justify-items: right;
    `}

  ${(props) =>
    props.currentFavorite &&
    css`
      pointer-events: none;
      ${greenBoxShadow}
    `}
`;

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePct>
    </JustifyRight>
  );
}
function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}
    >
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <JustifyRight>
          <ChangePercent data={data} />
        </JustifyRight>
      </CoinHeaderGridStyled>
      <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
}

function PriceTileCompact({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled
      compact
      currentFavorite={currentFavorite}
      onClick={setCurrentFavorite}
    >
      <JustifyLeft>{sym}</JustifyLeft>
      <div>
        <ChangePercent data={data} />
      </div>

      <div>${numberFormat(data.PRICE)}</div>
    </PriceTileStyled>
  );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;

  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <TileClass
          sym={sym}
          data={data}
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        ></TileClass>
      )}
    </AppContext.Consumer>
  );
}
