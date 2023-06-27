import React, { useState } from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

export default function Donut({ count }) {
  const [series, setSeries] = useState([]);
  const labels = ["User", "Wine", "Tasting Sheet"];

  React.useEffect(() => {
    setSeries(count);
  }, [count]);

  const options = {
    series,
    labels,
    horizontalAlign: "right",
  };

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="360" />
    </div>
  );
}

Donut.propTypes = {
  count: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};
