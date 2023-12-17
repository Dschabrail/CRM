import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent implements OnInit {
  chart: any;
  cityData = []; 
  cityLabels = []; 
  colors = [
    '#fd7f6f',
    '#7eb0d5',
    '#b2e061',
    '#bd7ebe',
    '#ffb55a',
    '#ffee65',
    '#beb9db',
    '#fdcce5',
    '#8bd3c7',
  ];

  constructor(public usersService: FirebaseService) {}
 
  ngOnInit(): void {
    this.usersService.getUser();
    this.getCityData();
  }
  
  createChart() {
    this.chart = new Chart('Doughnut', {
      type: 'doughnut',
      data: {
        labels: this.cityLabels,
        datasets: [
          {
            label: 'Users by City',
            data: this.cityData,
            backgroundColor: this.colors,
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Users by City',
            font: {
              size: 18,
              weight: 'bold',
            },
          },
          legend: {
            position: 'left',
            align: 'center',
            labels: {
              font: {
                size: 16,
              },
            },
          },
        },
      },
    });
  }

  getCityData() {
    const userData = this.usersService.allUsers;
    userData.forEach((user) => {
      const cityName = user.city;
      const index = this.cityLabels.indexOf(cityName);
      if (index === -1) {
        this.cityLabels.push(cityName);
        this.cityData.push(1);
      } else {
        this.cityData[index]++;
      }
    });
    this.createChart();
  }
}
