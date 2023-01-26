import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Wrapper } from "./Progress";

ChartJS.register(ArcElement, Tooltip, Legend);

function Grafico() {
  const data = {
    labels: [
      "Língua Portuguesa",
      "Biologia",
      "Inglês",
      "Artes",
      "Matemática",
      "Educação Física",
      "Química",
      "Física",
      "História",
      "Geografia",
      "Sociologia",
      "Filosofia",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 7, 13, 12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrapper>
      <Pie data={data} />
    </Wrapper>
  );
}

export default Grafico;
