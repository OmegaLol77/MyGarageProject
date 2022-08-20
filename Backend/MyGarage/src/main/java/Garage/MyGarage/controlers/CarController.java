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
	
	@PostMapping("/{carnum}/UpdateCarDone")
	public void UpdateCarDone(int carnum) {
		carBL.UpdateCarDone(carnum);
	}
	
	@GetMapping("getAllApprovedCars")
	public List<Car>getAllApprovedCars(){
		return carBL.getAllApprovedCars();
	}
	
	@GetMapping("getAllPendingCars")
	public List<Car>getAllPendingCars(){
		return carBL.getAllPendingCars();
	}
	
	@GetMapping("getAllCheckedCars")
	public List<Car>getAllCheckedCars(){
		return carBL.getAllCheckedCars();
	}
	
	@GetMapping("getAllBeingRepairedCars")
	public List<Car>getAllBeingRepairedCars(){
		return carBL.getAllRepairingCars();
	}
	
	@GetMapping("getAllRepairedCars")
	public List<Car>getAllRepairedCars(){
		return carBL.getAllRepairedCars();
	}
	
	@GetMapping("/{ownerPNum}/getCustomerCars")
	public List<Car> getCustomerCars(@PathVariable("ownerPNum") Integer ownerPNum){
		return carBL.getCustomerCars(ownerPNum);
	}
	
	@GetMapping("/{id}/findById")
	public Car findbyid(@PathVariable("id") Integer id) {
		return carBL.getById(id);
	}
	
//	@GetMapping("getAllCarsproccess")
//	public List<Car> getAllCarsproccess(){
//		return carBL.getAllCars();
//	}
	
	@PostMapping("addCar")
	public boolean addCar(@RequestBody Car car) {
		if(car.getOwnerid().equals("")==false && car.getOwnername().equals("")==false && car.getCarproccess().equals("")==false) {
			
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
		if(car.getOwnerid().equals("")==false && car.getOwnername().equals("")==false && car.getCarproccess().equals("")==false) {
			return carBL.updateCar(car);}
		return false;
	}
}
