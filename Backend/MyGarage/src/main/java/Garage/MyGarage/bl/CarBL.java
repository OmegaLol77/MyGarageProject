package Garage.MyGarage.bl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Garage.MyGarage.beans.Car;
import Garage.MyGarage.repositories.CarRepository;


@Service
public class CarBL {
	
	@Autowired
	CarBL carBL;
	
	@Autowired
	CarRepository carRepo;
	
	public List<Car> getAllCars(){
		return carRepo.findAll();
	}
	
	public Car getById(int id) {
		return carRepo.findById(id).get();
	}
	
	public boolean addCar(Car car) {
		try {
			carRepo.save(car);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public boolean deleteCar(int id) {
		try {
			carRepo.deleteById(id);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public boolean updateCar(Car car) {
		try {
			carRepo.save(car);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
