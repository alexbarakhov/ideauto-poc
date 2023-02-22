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
        layout: root.verticalLayout,
      }),
    )

    // Define data
    var data = [
      {
        country: 'France',
        sales: 100000,
      },
      {
        country: 'Spain',
        sales: 160000,
      },
      {
        country: 'United Kingdom',
        sales: 80000,
      },
      {
        country: 'Netherlands',
        sales: 90000,
      },
      {
        country: 'Portugal',
        sales: 25000,
      },
      {
        country: 'Germany',
        sales: 70000,
      },
    ]

    // Create series
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        valueField: 'sales',
        categoryField: 'country',
      }),
    )
    series.slices.template.setAll({
      stroke: am5.color(0xffffff),
      strokeWidth: 5,
    })
    series.data.setAll(data)
    series.labels.template.set('forceHidden', true)
    series.ticks.template.set('forceHidden', true)

    // Add legend
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: am5.GridLayout.new(root, {
          maxColumns: 3,
          fixedWidthGrid: true,
        }),
      }),
    )

    legend.data.setAll(series.dataItems)

    series.appear(1000, 100)
  }, [chartID])

  return <div id={chartID} style={{ minHeight: '500px' }}></div>
}
export default PieChart
