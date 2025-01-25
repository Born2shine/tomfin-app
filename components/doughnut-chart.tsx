"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        //   labels: accounts.map(account => account.name),
        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4', 'Bank 5', 'Bank 6', 'Bank 7'],
        datasets: [
            {
                label: "Bank",
                data: [1250, 1350, 2560, 2350, 2000, 1500, 9000],
                //   data: accounts.map(account => account.balance),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#F79F1F", "#E91E63", "#9C27B0"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#F79F1F", "#E91E63", "#9C27B0"],
            },
        ],
    };

    return (<Doughnut
        data={data}
        options={{
            cutout: "60%",
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />);

}

export default DoughnutChart