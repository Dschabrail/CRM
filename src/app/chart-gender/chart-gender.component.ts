import { Component } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-gender',
  templateUrl: './chart-gender.component.html',
  styleUrls: ['./chart-gender.component.scss']
})
export class ChartGenderComponent {
  chart: any;
  genderData = []; 
  genderLabels = []; 
  colors = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
  
  ];

  constructor(public usersService: FirebaseService) {}
 
  ngOnInit(): void {
    this.getGenderData();
  }
  
  createChart() {
    this.chart = new Chart('Pie', {
      type: 'pie',
      data: {
        labels: this.genderLabels,
        datasets: [
          {
            label: 'GENDER OF USERS',
            data: this.genderData,
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
            text: 'GENDER OF USERS',
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

  getGenderData() {
    const userData = this.usersService.allUsers;
    userData.forEach((user) => {
      const gender = user.gender;
      const index = this.genderLabels.indexOf(gender);
      if (index === -1) {
        this.genderLabels.push(gender);
        this.genderData.push(1);
      } else {
        this.genderData[index]++;
      }
    });
    this.createChart();
  }
}
