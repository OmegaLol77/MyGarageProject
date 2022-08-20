package Garage.MyGarage.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import Garage.MyGarage.beans.Car;

public interface CarRepository extends JpaRepository<Car, Integer> {
	

	@Query(value = "SELECT * FROM car where carproccess like 'Car is Checked'", nativeQuery = true)
	List<Car> getAllCheckedCars();
	
	@Query(value = "SELECT * FROM car where carproccess like 'Car Being Repaired'", nativeQuery = true)
	List<Car> getAllRepairingCars();
	
	@Query(value = "SELECT * FROM car where carproccess like 'Car Repairing Done'", nativeQuery = true)
	List<Car> getAllRepairedCars();
	
	
//	Start Update Queries
	@Modifying
	@Query(value = "UPDATE car SET carproccess = 'Pending Offer' where carnumber = ?1 ", nativeQuery = true)
	void UpdatePendingOfferCarProcess(int carnum);
	
	@Modifying
	@Query(value = "UPDATE car SET carproccess = 'Approved' where carnumber = ?1 ", nativeQuery = true)
	void UpdateCarProcessapproved(int carnum);
	
	@Modifying
	@Query(value = "UPDATE car SET carproccess = 'Car is Checked' where carnumber = ?1 ", nativeQuery = true)
	void UpdateCarProcessdeclined(int carnum);
	
	@Modifying
	@Query(value = "UPDATE car SET carproccess = 'Car Repairing Done' where carnumber = ?1 ", nativeQuery = true)
	void UpdateCarProcessDone(int carnum);
	
	@Query(value = "SELECT * FROM car where carproccess like 'Pending Offer'", nativeQuery = true)
	List<Car> getAllPendingCars();
	
	@Query(value = "SELECT * FROM car where carproccess like 'Approved'", nativeQuery = true)
	List<Car> getAllApprovedCars();
//	Dont Update Queries
	
	
	public Car findBycarnumber(int carnumber);
	public List<Car> findByownerPNum(int ownerPNum);

}
