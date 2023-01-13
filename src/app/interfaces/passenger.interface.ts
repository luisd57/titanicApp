export interface IPassenger {
    PassengerId: number;
    Survived: number;
    Pclass: number;
    Name: string;
    Sex: string;
    Age: number | string;
    SibSp: number;
    Parch: number;
    Ticket: number | string;
    Fare: number;
    Cabin: string;
    Embarked: string;
}