import React, { useState } from 'react';
import { ChartData } from './ChartData';
import ChartComponent from './ChartComponent';

function Chart() {
    const [userData, setUserData] = useState({
        labels: ChartData.map((data) => data.valuesBelow),
        datasets: [
            {
                label: "Quantidade de eventos",
                data: ChartData.map((data) => data.dataInside),
                backgroundColor: [
                    "#000",
                    "rgb(66 63 76)",
                    "rgb(20 10 40)"
                ],
                borderColor: "#000",
                borderWidth: 2,
            },
        ],
    });

    return (
        <>
            <div className='chartContainer'>
                <h1 className='chartTitle'>Gráfico de Eventos</h1>
                <ChartComponent chartDataProps={userData} />
            </div>
        </>
    )
}

export default Chart;