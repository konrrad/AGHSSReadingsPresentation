import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
})
export class PlotComponent implements OnInit {
  ngOnInit(): void {
    this.build_graph();
  }

  @Input() xdata;
  @Input() ydata;
  public graph = {
    data: [
        { x: [], y: [], type: 'scatter', mode: 'markers', marker: {color: 'red'} },
    ],
    layout: 
    {
      xaxis: {
        title: {
          text: 'Timestamp',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        },
      },
      yaxis: {
        title: {
          text: 'Reading',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
      }
    }
};

build_graph()
{
  this.graph.data[0].x=this.xdata;
  this.graph.data[0].y=this.ydata;

}

}
