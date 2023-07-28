import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipCallbacks
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface BarChartProp{
  datas :{
    label: string
    value: number|string
    totalItem: number
  }[]
  title?: string
}

export default function BarChart({datas, title} : BarChartProp){
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
            label: function(context:any) {
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += `$${context.raw.income} Total Item: ${context.raw.totalItem}`;
                }
                return label;
            }
        }
    }
    },
  };
  const data = {
    datasets: [
      {
        label: 'Sales',
        data: datas.map(data => {return {label: data.label, income: data.value, totalItem: data.totalItem}}),
        backgroundColor: '#B2C5D4',
        hoverBackgroundColor: '#3E7DAB',
        borderRadius: 5,
        parsing: {
          xAxisKey: 'label',
          yAxisKey: 'income',
        }
      }
    ],
  };
  
 return(<Bar options={options} data={data}/>) 
}