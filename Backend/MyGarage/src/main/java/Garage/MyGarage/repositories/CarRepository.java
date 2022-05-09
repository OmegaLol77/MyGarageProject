package Garage.MyGarage.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import Garage.MyGarage.beans.Car;

public interface CarRepository extends JpaRepository<Car, Integer> {
	

}
