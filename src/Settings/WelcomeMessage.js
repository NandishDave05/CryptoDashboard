import React from "react";
import { AppContext } from "../App/AppProvider";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to CryptoDash, Please select your favourite coins to begin.{" "}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
