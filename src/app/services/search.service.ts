import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IPassenger } from '../interfaces/passenger.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  passengers$!: Observable<IPassenger[]>;
  alivePassengers$!: Observable<IPassenger[]>;
  aliveWomen$!: Observable<IPassenger[]>;
  aliveMen$!: Observable<IPassenger[]>;
  private passengersCollection!: AngularFirestoreCollection<IPassenger>;
  
  constructor(private afs: AngularFirestore) { }

  getPassengers(): Observable<IPassenger[]> {
    this.passengersCollection = this.afs.collection('passengers');
    return this.passengers$ = this.passengersCollection.valueChanges({ idField: 'passengerId' });
  }

  getAlivePassengers(): Observable<IPassenger[]> {
    this.passengersCollection = this.afs.collection('passengers', ref => ref.where('survived', '==', '1'));
    return this.alivePassengers$ = this.passengersCollection.valueChanges({ idField: 'passengerId' });
  }

  getAliveWomen(): Observable<IPassenger[]> {
    this.passengersCollection = this.afs.collection('passengers', ref => ref.where('survived', '==', '1').where('sex', '==', 'female'));
    return this.aliveWomen$ = this.passengersCollection.valueChanges({ idField: 'passengerId' });
  }

  getAliveMen(): Observable<IPassenger[]> {
    this.passengersCollection = this.afs.collection('passengers', ref => ref.where('survived', '==', '1').where('sex', '==', 'male'));
    return this.aliveMen$ = this.passengersCollection.valueChanges({ idField: 'passengerId' });
  }


}
