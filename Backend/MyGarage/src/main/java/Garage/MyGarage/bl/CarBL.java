package Garage.MyGarage.bl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

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
	
	public List<Car> getAllCheckedCars(){
		return carRepo.getAllCheckedCars();
	}
	
	public List<Car> getAllRepairingCars(){
		return carRepo.getAllRepairingCars();
	}
	
	public List<Car> getAllRepairedCars(){
		return carRepo.getAllRepairedCars();
	}
	
//	@GetMapping("getAllCarsnotapproved")
//	public List<Car> getAllCarsproccess(){
//		return carRepo.findBycarproccess();
//	}
	
	public List<Car> getCustomerCars(int ownerPNum){
		return carRepo.findByownerPNum(ownerPNum);
	}
	
	public Car getById(int id) {
		return carRepo.findBycarnumber(id);
	}
	
	public boolean addCar(Car car) {
		try {
			List<Car> list = carRepo.findAll();
			for(int i=0;i<list.size();i++) {
				if(car.getCarnumber()==list.get(i).getCarnumber()) {
					return false;
				}
			}
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
