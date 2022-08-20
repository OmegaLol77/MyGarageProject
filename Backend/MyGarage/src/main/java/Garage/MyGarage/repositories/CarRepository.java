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
	
	@Query(value = "UPDATE car SET carproccess = 'Pending Offer' ,WHERE carnumber=?1;", nativeQuery = true)
	void UpdatePendingOfferCarProcess(int carnum);
	
	@Query(value = "UPDATE car SET carproccess = 'Approved' WHERE carnumber=?1;", nativeQuery = true)
	void UpdateCarProcessapproved(int carnum);
	@Query(value = "UPDATE car SET carproccess = 'Car is Checked' WHERE carnumber=?1;", nativeQuery = true)
	void UpdateCarProcessdeclined(int carnum);
	
	@Query(value = "UPDATE car SET carproccess = 'Done' WHERE carnumber=?1;", nativeQuery = true)
	void UpdateCarProcessDone(int carnum);
	
	@Query(value = "SELECT * FROM car where carproccess like 'Pending Offer'", nativeQuery = true)
	List<Car> getAllPendingCars();
	
	@Query(value = "SELECT * FROM car where carproccess like 'Approved'", nativeQuery = true)
	List<Car> getAllApprovedCars();
	
	public Car findBycarnumber(int carnumber);
	public List<Car> findByownerPNum(int ownerPNum);

}
