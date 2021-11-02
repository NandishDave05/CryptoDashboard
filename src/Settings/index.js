import React from "react";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import ConfirmButton from "./ConfirmButton";
import Search from "./Search";
import WelcomeMEssage from "./WelcomeMessage";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Page name="settings">
      {" "}
      <WelcomeMEssage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
}
