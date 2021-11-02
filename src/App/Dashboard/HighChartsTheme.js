import { lightTheme } from "../../Shared/Styles";

export default {
  colors: [
    "green",
    "#50B432",
    "#ED561B",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4",
  ],
  chart: {
    backgroundColor: lightTheme ? "white" : "#061a44",
  },

  credits: {
    enabled: false,
  },
  legend: {
    itemStyle: {
      font: "9pt Trebuchet MS, Verdana, sans-serif",
      color: lightTheme ? "black" : "white",
    },
    itemHoverStyle: {
      color: "gray",
    },
  },
};
