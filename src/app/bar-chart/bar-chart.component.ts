import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  chart: any;
  public userCountByAgeGroup = [0, 0, 0, 0];
  timestamp = [];

  constructor(public usersService: FirebaseService) {}
  ngOnInit(): void {
    this.getTimestamp();
    this.getAgeGroup();
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: ['age <= 18', 'age <= 35', 'age <= 50', 'age <= 100'],
        datasets: [
          {
            label: 'number of Users',
            data: this.userCountByAgeGroup,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Age Groups of Users',
            font: {
              size: 18,
              weight: 'bold',
            },
          },
          legend: {
            labels: {
              font: {
                size: 16,
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 16,
                weight: 'bold',
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 16,
                weight: 'bold',
              },
            },
          },
        },
      },
    });
  }

  getTimestamp() {
    for (let i = 0; i < this.usersService.allUsers.length; i++) {
      let unix = this.usersService.allUsers[i].birthDate;
      this.timestamp.push(unix);
    }
  }

  getAgeGroup() {
    for (let i = 0; i < this.timestamp.length; i++) {
      let birthDate = new Date(this.timestamp[i]);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      if (age <= 18) {
        this.userCountByAgeGroup[0]++;
      } else if (age <= 35) {
        this.userCountByAgeGroup[1]++;
      } else if (age <= 50) {
        this.userCountByAgeGroup[2]++;
      } else {
        this.userCountByAgeGroup[3]++;
      }
    }
  }
}
