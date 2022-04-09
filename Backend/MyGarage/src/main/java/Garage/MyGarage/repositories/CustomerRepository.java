package Garage.MyGarage.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import Garage.MyGarage.beans.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {

}
