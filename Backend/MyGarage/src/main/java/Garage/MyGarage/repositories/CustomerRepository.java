package Garage.MyGarage.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import Garage.MyGarage.beans.Car;
import Garage.MyGarage.beans.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	 Customer findBycarNum(int carNum);

}
