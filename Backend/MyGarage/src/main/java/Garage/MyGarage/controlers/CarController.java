package Garage.MyGarage.controlers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Garage.MyGarage.beans.Car;
import Garage.MyGarage.bl.CarBL;

@RestController
@RequestMapping("Car")
@CrossOrigin
public class CarController {
	
	@Autowired
	CarBL carBL;
	
	@GetMapping("getAllCars")
	public List<Car> getAllCars(){
		return carBL.getAllCars();
	}
	
	@GetMapping("/{id}/findById")
	public Car findbyid(@PathVariable("id") Integer id) {
		return carBL.getById(id);
	}
	
	@PostMapping("addCar")
	public boolean addCar(@RequestBody Car car) {
		if(car.getCarnumber()>0 && car.getOwnerid()>0 && car.getDate().equals("")==false && car.getOwnername().equals("")==false) {
			return carBL.addCar(car);
		}
		return false;
	}
	
	@DeleteMapping("/{id}/deleteCar")
	public boolean deleteCar(@PathVariable("id") Integer id){
		return carBL.deleteCar(id);
	}
	
	@PostMapping("/{id}/updateCar")
	public boolean updateCar(@PathVariable("id") Integer id,@RequestBody Car car){
		return carBL.updateCar(car);
	}
}
