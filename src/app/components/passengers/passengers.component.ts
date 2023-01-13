import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPassenger } from 'src/app/interfaces/passenger.interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Chart, ChartOptions } from 'chart.js';
import { SearchService } from 'src/app/services/search.service';
import { PassengersService } from 'src/app/services/passengers.service';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent /*implements OnInit*/ {

  public currentChartData = { data: [0, 0], labels: ['Total', 'Alive'] };
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartPlugins = [];
  public pieChartLegend = true;

  constructor(private passengersService: PassengersService) { }

  filterByAliveWomen() {
    this.currentChartData.data = [
      this.passengersService.getPassengers().filter(p => p.Sex === 'female').length,
      this.passengersService.getAliveWomen().length
    ];
    this.currentChartData.labels = ['Total Women', 'Alive Women'];
  }

  filterByAliveMen() {
    this.currentChartData.data = [
      this.passengersService.getPassengers().filter(p => p.Sex === 'male').length,
      this.passengersService.getAliveMen().length
    ];
    this.currentChartData.labels = ['Total Men', 'Alive Men'];
  }

  filterBySurvived() {
    this.currentChartData.data = [
      this.passengersService.getPassengers().filter(p => p.Survived === 0).length,
      this.passengersService.getPassengers().filter(p => p.Survived === 1).length
    ];
    this.currentChartData.labels = ['Died', 'Survived'];
  }

}

