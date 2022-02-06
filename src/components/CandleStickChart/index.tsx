import React, { useLayoutEffect, useState } from 'react';
import * as d3 from 'd3';
import './style.scss';

export function CandleStickChart(props: any) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    function update() {
      const $node = document.querySelector('#chart') as HTMLElement;
      const rect = $node.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
      console.log(width, height);
    }

    setTimeout(() => {
      update();
    });

    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);

  const end = new Date();
  const start = new Date(end.getTime() - 1000 * 60 * 60 * 24 * 60);
  const data = [
    {
      value: 40,
      Date: new Date('2022-02-02T00:00:00'),
    },
    {
      value: 80,
      Date: new Date('2022-02-02T01:00:00'),
    },
  ];

  useLayoutEffect(() => {
    appendToData(data);
  }, []);

  useLayoutEffect(() => {
    // buildChart(data);
  }, [width, height]);

  return <div id="chart" />;

  function min(a, b) { return a < b ? a : b; }
  function max(a, b) { return a > b ? a : b; }

  function buildChart(data) {
    const margin = 50;

    d3.select('#chart').select('svg').remove();

    const chart = d3.select('#chart')
      .append('svg:svg')
      .attr('class', 'chart');

    const y = d3.scaleLinear()
      .domain([
        d3.min(data.map((x) => x.Low as any)) as any,
        d3.max(data.map((x) => x.High as any)) as any,
      ])
      .range([height - margin, margin]);
    const x = d3.scaleLinear()
      .domain([
        d3.min(data.map((d) => d.timestamp)) as any,
        d3.max(data.map((d) => d.timestamp)) as any,
      ])
      .range([margin, width - margin]);

    chart.selectAll('line.x')
      .data(x.ticks(10))
      .enter().append('svg:line')
      .attr('class', 'x')
      .attr('x1', x)
      .attr('x2', x)
      .attr('y1', margin)
      .attr('y2', height - margin)
      .attr('stroke', '#ccc');

    chart.selectAll('line.y')
      .data(y.ticks(10))
      .enter().append('svg:line')
      .attr('class', 'y')
      .attr('x1', margin)
      .attr('x2', width - margin)
      .attr('y1', y)
      .attr('y2', y)
      .attr('stroke', '#ccc');

    chart.selectAll('text.xrule')
      .data(x.ticks(10))
      .enter().append('svg:text')
      .attr('class', 'xrule')
      .attr('x', x)
      .attr('y', height - margin)
      .attr('dy', 20)
      .attr('text-anchor', 'middle')
      .text((d) => { const date = new Date(d * 1000); return `${date.getMonth() + 1}/${date.getDate()}`; });

    chart.selectAll('text.yrule')
      .data(y.ticks(10))
      .enter().append('svg:text')
      .attr('class', 'yrule')
      .attr('x', width - margin)
      .attr('y', y)
      .attr('dy', 0)
      .attr('dx', 20)
      .attr('text-anchor', 'middle')
      .text(String);

    chart.selectAll('rect')
      .data(data)
      .enter().append('svg:rect')
      .attr('x', (d: any) => x(d.timestamp))
      .attr('y', (d: any) => y(max(d.Open, d.Close)))
      .attr('height', (d: any) => y(min(d.Open, d.Close)) - y(max(d.Open, d.Close)))
      .attr('width', (d: any) => 0.5 * (width - 2 * margin) / data.length)
      .attr('fill', (d: any) => (d.Open > d.Close ? 'red' : 'green'));

    chart.selectAll('line.stem')
      .data(data)
      .enter().append('svg:line')
      .attr('class', 'stem')
      .attr('x1', (d: any) => x(d.timestamp) + 0.25 * (width - 2 * margin) / data.length)
      .attr('x2', (d: any) => x(d.timestamp) + 0.25 * (width - 2 * margin) / data.length)
      .attr('y1', (d: any) => y(d.High))
      .attr('y2', (d: any) => y(d.Low))
      .attr('stroke', (d: any) => (d.Open > d.Close ? 'red' : 'green'));
  }

  function appendToData(data) {
    if (data.length > 0) {
      return;
    }
    for (let i = 0; i < data.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      data[i].timestamp = (new Date(data[i].Date).getTime() / 1000);
    }
    // eslint-disable-next-line no-param-reassign
    data = data.sort((x, y) => x.timestamp - y.timestamp);
    buildChart(data);
  }
}
