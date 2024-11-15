import React  , {useState , useEffect} from 'react'
import {Chart as ChartJS , CategoryScale , LinearScale , Title ,  Tooltip, Legend} from 'chart.js'
import { BarController , BarElement  } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Tooltip,
    Title,
    Legend
)

const BarChartComponent = () => {


    const [chartData , setChartData] = useState({
        labels : ['Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun'],
        datasets : [
            {
                label : 'Sales $' ,
                data : [10000 , 2000 , 7000 , 4000 , 5000 , 16000 , 3000],
                backgroundColor : 'rgba(53 , 162 , 235 , 0.4)'
            }   

        ]
    })

    const [chartOptions , setChartOptions] = useState({
        plugins : {
            legend : {
                position : 'top'
            },
            title : {
                display : true,
                text : 'Daily Revenue'
            }
        },
        responsive : true,
        maintainAspectRatio : false
    })

    useEffect(() => {
        setChartOptions({
            plugins : {
                legend : {
                    position : 'top'
                },
                title : {
                    display : true,
                    text : 'Daily Revenue'
                }
            },
            responsive : true,
            maintainAspectRatio : false
        })

        setChartData({
            labels : ['Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun'],
            datasets : [
                {
                    label : 'Sales $' ,
                    data : [1000 , 2000 , 7000 , 4000 , 5000 , 6000 , 3000],
                    backgroundColor : 'rgba(53 , 162 , 235 , 0.4)'
                }   

            ]

        })
    } , [])
        

  return (
   <>
   <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
    <Bar data={chartData} options={chartOptions}/>
   </div>
   </>
  )
}

export default BarChartComponent
