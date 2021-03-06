import { Geometry } from '@antv/g2';
import { Area } from '../../../../src';
import { partySupport } from '../../../data/party-support';
import { createDiv } from '../../../utils/dom';

describe('area', () => {
  it('x*y*color point', () => {
    const area = new Area(createDiv(), {
      width: 400,
      height: 300,
      data: partySupport.filter((o) => ['FF', 'Lab'].includes(o.type)),
      xField: 'date',
      yField: 'value',
      seriesField: 'type',
      appendPadding: 10,
    });

    area.render();
    expect(area.chart.geometries.length).toBe(1);

    let xValue;
    let yValue;
    let colorValue;
    area.update({
      ...area.options,
      point: {
        size: 2,
        shape: 'circle',
        style: (x: string, y: number, color: string) => {
          xValue = x;
          yValue = y;
          colorValue = color;
          return {
            fill: color === 'FF' ? 'red' : 'blue',
          };
        },
      },
      line: {
        size: 2,
      },
    });
    expect(area.chart.geometries.length).toBe(3);
    expect(xValue).toBe('25/01/2018');
    expect(yValue).toBe(400);
    expect(colorValue).toBe('Lab');

    const point = area.chart.geometries.find((g: Geometry) => g.type === 'line');
    expect(point.shapeType).toBe('line');
    // @ts-ignore
    expect(point.attributeOption.size.values).toEqual([2]);
    // @ts-ignore
    // expect(point.attributeOption.shape.values).toEqual(['circle']);
  });
});
