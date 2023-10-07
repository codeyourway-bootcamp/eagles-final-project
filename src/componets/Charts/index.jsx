import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ContainerGraphic } from './Style';

// Registra os plugins do Chart.js que serão usados
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Configurações padrão para o gráfico
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // Posição da legenda no topo
    },
    title: {
      display: true,
      text: 'Balanço de Avaliações', // Título do gráfico
    },
  },
};

// Rótulos para as barras do gráfico
const labels = ['Muito Ruim', 'Ruim', 'Bom', 'Ótimo', 'Excelente'];

// Chamada de API falsa que retorna um objeto de dados
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        labels,
        datasets: [
          {
            // label: 'Conjunto de Dados 1', 
            data: [1, 5, 7, 4, 40], 
            backgroundColor: ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF'], 
          },
        //   {
        //     label: 'Conjunto de Dados 2', // Rótulo do segundo conjunto de dados
        //     data: [450, 650, 850, 550, 750, 950, 700], // Valores do segundo conjunto de dados
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)', // Cor de fundo do segundo conjunto de dados
        //   },
        ],
      };
      resolve(data);
    }, 1000); 
  });
};
function Grafico() {
  const [chartData, setChartData] = React.useState(null);

  React.useEffect(() => {
    // Simula a chamada da API ao montar o componente
    fetchData().then((data) => {
      setChartData(data);
    });
  }, []);

  return (
    <ContainerGraphic>
      {chartData ? <Bar options={options} data={chartData} /> : 'Carregando dados...'}
    </ContainerGraphic>
  );
}

export { Grafico, options };