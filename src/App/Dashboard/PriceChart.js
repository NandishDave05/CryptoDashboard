import HighChartsConfig from "./HighChartsConfig";
import React from "react";
import { Tile } from "../../Shared/Tile";
import { AppContext } from "../AppProvider";
import ReactHighcharts from "react-highcharts";
import HighChartsTheme from "./HighChartsTheme";
import ChartSelect from "./ChartSelect";

ReactHighcharts.Highcharts.setOptions(HighChartsTheme);
export default function () {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue={"months"}
            onChange={(e) => changeChartSelect(e.target.value)}
            color="red"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </ChartSelect>
          {historical ? (
            <ReactHighcharts config={HighChartsConfig(historical)} />
          ) : (
            <div>Loading Historical Data</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
