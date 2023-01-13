import { Injectable } from '@angular/core';
import { IPassenger } from '../interfaces/passenger.interface';
import { PASSENGERS } from '../../mocks/passengerData';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  private allPassengers: IPassenger[];

  constructor() {
    this.allPassengers = PASSENGERS;
  }

  getPassengers(): IPassenger[] {
    return this.allPassengers;
  }

  getAlivePassengers(): IPassenger[] {
    return this.allPassengers.filter(passenger => passenger.Survived === 1);
  }

  getAliveWomen(): IPassenger[] {
    return this.allPassengers.filter(passenger => passenger.Survived === 1 && passenger.Sex === 'female');
  }

  getAliveMen(): IPassenger[] {
    return this.allPassengers.filter(passenger => passenger.Survived === 1 && passenger.Sex === 'male');
  }


}
