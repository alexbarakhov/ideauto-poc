import React, { useLayoutEffect } from 'react'

import * as am5 from '@amcharts/amcharts5'
import am5themes_Animated from '@amcharts/amcharts5/themes/Frozen'
import * as am5xy from '@amcharts/amcharts5/xy'

function BarChart(props) {
  const chartID = props.chartID
  console.log({ chartID })

  useLayoutEffect(() => {
    var root = am5.Root.new(chartID)

    var myTheme = am5.Theme.new(root)

    myTheme.rule('Label').setAll({
      fill: am5.color(0x003300),
      fontSize: '1em',
    })

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
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        layout: root.verticalLayout,
      }),
    )

    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      }),
    )

    var data = [
      {
        year: '2021',
        europe: 2,
        namerica: 2.1,
        asia: 1.8,
        lamerica: 1,
        meast: 0.8,
        africa: 0.4,
      },
      {
        year: '2022',
        europe: 2.6,
        namerica: 2.7,
        asia: 2.2,
        lamerica: 0.5,
        meast: 0.4,
        africa: 0.3,
      },
      {
        year: '2023',
        europe: 2.8,
        namerica: 2.9,
        asia: 2.4,
        lamerica: 0.3,
        meast: 0.9,
        africa: 0.5,
      },
    ]

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'year',
        renderer: am5xy.AxisRendererX.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
        tooltip: am5.Tooltip.new(root, {
          themeTags: ['axis'],
          animationDuration: 200,
        }),
      }),
    )

    xAxis.get('renderer').labels.template.setAll({
      fill: root.interfaceColors.get('alternativeText'),
    })

    xAxis.setAll({
      background: am5.Rectangle.new(root, {
        fill: root.interfaceColors.get('alternativeBackground'),
        fillOpacity: 0.7,
      }),
    })

    xAxis.data.setAll(data)

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    )

    function makeSeries(name, fieldName) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: 'year',
        }),
      )

      series.columns.template.setAll({
        tooltipText: '{name}, {categoryX}:{valueY}',
        width: am5.percent(90),
        tooltipY: 0,
      })

      series.data.setAll(data)

      series.appear(1000, 100)

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: '{valueY}',
            fill: root.interfaceColors.get('alternativeText'),
            centerY: 0,
            centerX: am5.p50,
            populateText: true,
          }),
        })
      })

      legend.data.push(series)
    }

    makeSeries('Europe', 'europe')
    makeSeries('North America', 'namerica')
    makeSeries('Asia', 'asia')
    makeSeries('Latin America', 'lamerica')
    makeSeries('Middle East', 'meast')
    makeSeries('Africa', 'africa')
  }, [chartID])

  return <div id={chartID} style={{ minHeight: '500px' }}></div>
}
export default BarChart
