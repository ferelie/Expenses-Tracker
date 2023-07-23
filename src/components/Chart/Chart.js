import Bar from "./Bar";
import 'Chart.css';

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((point, index) => {
        <Bar
          key={point.index}
          value={point.value}
          maxValue={null}
          label={point.label}
        />;
      })}
    </div>
  );
};
