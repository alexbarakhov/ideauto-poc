import React, { useLayoutEffect } from 'react'

import * as am5 from '@amcharts/amcharts5'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

//chart type
import * as am5percent from '@amcharts/amcharts5/percent'

function PieChart(props) {
  const chartID = props.chartID
  console.log({ chartID })

  useLayoutEffect(() => {
    var root = am5.Root.new(chartID)

    var myTheme = am5.Theme.new(root)

    myTheme
      .rule('ColorSet')
      .set('colors', [
        am5.color(0xffbfcb),
        am5.color(0x90ee90),
        am5.color(0xadd8e6),
        am5.color(0xf4f192),
        am5.color(0xbfa8f9),
        am5.color(0xa8f9f6),
      ])

    root.setThemes([am5themes_Animated.new(root), myTheme])

    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
      }),
    )

    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        endAngle: 270,
      }),
    )

    series.slices.template.setAll({
      stroke: am5.color(0xffffff),
      strokeWidth: 4,
    })

    series.states.create('hidden', {
      endAngle: -90,
    })

    let data = [
      {
        category: 'Lithuania',
        value: 401.9,
      },
      {
        category: 'Czechia',
        value: 301.9,
      },
      {
        category: 'Ireland',
        value: 201.1,
      },
      {
        category: 'Germany',
        value: 165.8,
      },
      {
        category: 'Australia',
        value: 139.9,
      },
      {
        category: 'Austria',
        value: 128.3,
      },
    ]

    series.data.setAll(data)

    series.appear(1000, 100)
  }, [chartID])

  return <div id={chartID} style={{ minHeight: '500px' }}></div>
}
export default PieChart
