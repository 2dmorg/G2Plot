import { Bar } from '../../../../src';
import { salesByArea, subSalesByArea } from '../../../data/sales';
import { createDiv } from '../../../utils/dom';

describe('bar label', () => {
  it('position: right', () => {
    const bar = new Bar(createDiv(), {
      width: 400,
      height: 300,
      data: salesByArea,
      xField: 'sales',
      yField: 'area',
      meta: {
        sales: {
          nice: true,
          formatter: (v) => `${Math.floor(v / 10000)}万`,
        },
      },
      label: {
        position: 'right',
      },
    });

    bar.render();

    const geometry = bar.chart.geometries[0];
    const labelGroups = geometry.labelsContainer.getChildren();

    // @ts-ignore
    expect(geometry.labelOption.cfg).toEqual({
      position: 'right',
    });
    expect(labelGroups).toHaveLength(salesByArea.length);
    labelGroups.forEach((label, index) => {
      expect(label.get('children')[0].attr('text')).toBe(`${Math.floor(salesByArea[index].sales / 10000)}万`);
    });
  });

  it('label position middle', () => {
    const bar = new Bar(createDiv(), {
      width: 400,
      height: 300,
      data: salesByArea,
      xField: 'sales',
      yField: 'area',
      meta: {
        sales: {
          nice: true,
          formatter: (v) => `${Math.floor(v / 10000)}万`,
        },
      },
      label: {
        position: 'middle',
      },
    });

    bar.render();

    const geometry = bar.chart.geometries[0];

    // @ts-ignore
    expect(geometry.labelOption.cfg).toEqual({ position: 'middle' });
  });

  it('label position left', () => {
    const bar = new Bar(createDiv(), {
      width: 400,
      height: 300,
      data: salesByArea,
      xField: 'sales',
      yField: 'area',
      meta: {
        sales: {
          nice: true,
          formatter: (v) => `${Math.floor(v / 10000)}万`,
        },
      },
      label: {
        position: 'left',
      },
    });

    bar.render();

    const geometry = bar.chart.geometries[0];

    // @ts-ignore
    expect(geometry.labelOption.cfg).toEqual({ position: 'left' });
  });

  it('group bar position right', () => {
    const bar = new Bar(createDiv('group bar position middle'), {
      width: 400,
      height: 300,
      data: subSalesByArea,
      xField: 'sales',
      yField: 'area',
      colorField: 'series',
      isGroup: true,
      meta: {
        sales: {
          nice: true,
          formatter: (v) => `${Math.floor(v / 10000)}万`,
        },
      },
      label: {
        position: 'right',
      },
    });

    bar.render();

    const geometry = bar.chart.geometries[0];
    const labelGroups = geometry.labelsContainer.getChildren();

    // @ts-ignore
    expect(geometry.labelOption.cfg).toEqual({
      position: 'right',
    });
    expect(labelGroups).toHaveLength(subSalesByArea.length);
    labelGroups.forEach((label) => {
      const origin = label.get('origin')._origin;
      expect(label.get('children')[0].attr('text')).toBe(`${Math.floor(origin.sales / 10000)}万`);
    });
  });

  it('group column position middle', () => {
    const bar = new Bar(createDiv('group column position middle'), {
      width: 400,
      height: 300,
      data: subSalesByArea,
      xField: 'sales',
      yField: 'area',
      colorField: 'series',
      isGroup: true,
      meta: {
        sales: {
          nice: true,
          formatter: (v) => `${Math.floor(v / 10000)}万`,
        },
      },
      label: {
        position: 'middle',
      },
    });

    bar.render();

    const geometry = bar.chart.geometries[0];
    const labelGroups = geometry.labelsContainer.getChildren();

    // @ts-ignore
    expect(geometry.labelOption.cfg).toEqual({
      position: 'middle',
    });
    expect(labelGroups).toHaveLength(subSalesByArea.length);
    labelGroups.forEach((label) => {
      const origin = label.get('origin')._origin;
      expect(label.get('children')[0].attr('text')).toBe(`${Math.floor(origin.sales / 10000)}万`);
    });
  });

  it('group bar position left', () => {
    const bar = new Bar(createDiv('group bar position bottom'), {
      width: 400,
      height: 300,
      data: subSalesByArea,
      xField: 'sales',
      yField: 'area',
      colorField: 'series',
      isGroup: true,
      meta: {
        sales: {
          nice: true,
          formatter: (v) => `${Math.floor(v / 10000)}万`,
        },
      },
      label: {
        position: 'left',
      },
    });

    bar.render();

    const geometry = bar.chart.geometries[0];
    const labelGroups = geometry.labelsContainer.getChildren();

    // @ts-ignore
    expect(geometry.labelOption.cfg).toEqual({
      position: 'left',
    });
    expect(labelGroups).toHaveLength(subSalesByArea.length);
    labelGroups.forEach((label) => {
      const origin = label.get('origin')._origin;
      expect(label.get('children')[0].attr('text')).toBe(`${Math.floor(origin.sales / 10000)}万`);
    });
  });
});
