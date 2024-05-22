import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/cars.interface';
import { UpdateCarDto, CreateCarDto } from './dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      make: 'Toyota',
      model: 'Corolla',
      year: 2018,
    },
    {
      id: uuid(),
      make: 'Toyota',
      model: 'Camry',
      year: 2019,
    },
    {
      id: uuid(),
      make: 'Toyota',
      model: 'RAV4',
      year: 2020,
    },
  ];
  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      ...createCarDto,
      id: uuid(),
    };

    this.cars.push(newCar);
    return createCarDto;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOne(id);

    this.cars = this.cars.map((car: Car) =>
      car.id === id
        ? (car = {
            ...carDb,
            ...updateCarDto,
            id,
          })
        : car,
    );

    return this.cars;
  }

  delete(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id != id);
  }
}
