import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.chartTest();

  }
  chartTest() {
    var dynamicColors = function () {
      var r = Math.floor(Math.random());
      var g = Math.floor(Math.random());
      var b = Math.floor(Math.random());
      return "rgb(" + r + "," + g + "," + b + ")";
    };
    var myChart = new Chart("mychart", {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [dynamicColors],
          borderColor: [dynamicColors],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
