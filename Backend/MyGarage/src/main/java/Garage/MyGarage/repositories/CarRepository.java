package Garage.MyGarage.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import Garage.MyGarage.beans.Car;

public interface CarRepository extends JpaRepository<Car, Integer> {
	

	@Query(value = "SELECT * FROM car where carproccess like 'Car is Checked'", nativeQuery = true)
	List<Car> getAllCheckedCars();
	@Query(value = "SELECT * FROM car where carproccess like 'Car Being Repaired'", nativeQuery = true)
	List<Car> getAllRepairingCars();
	@Query(value = "SELECT * FROM car where carproccess like 'Car Repairing Done'", nativeQuery = true)
	List<Car> getAllRepairedCars();
	
	public Car findBycarnumber(int carnumber);
	public List<Car> findByownerPNum(int ownerPNum);

}
