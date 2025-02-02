import React from 'react'
import{ChartComponent,Series,SeriesCollectionDirective,Inject,DateTime,Legend,ToolTip,LineSeries} from '@syncfusion/ej2-react-charts'

import {lineCustomSeries,LinePrimaryYAxix,LinePrimaryXAxix} from '../../data/dummy'
const LineChart = () => {
  return (
    <div>
      <ChartComponent>
        <Inject services={[LineSeries,DateTime,Legend,ToolTip]}/>
      </ChartComponent>
    </div>
  )
}

export default LineChart
