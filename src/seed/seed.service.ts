import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsServices: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  runSeedCars() {
    this.carsServices.fillCarsWithSeedDate(CARS_SEED);
    return 'Seeder cars runned';
  }
  runSeedBrands() {
    this.brandsService.fillBrandsWithSeedDate(BRANDS_SEED);
    return 'Seeder brands runned';
  }
}
