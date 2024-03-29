package Garage.MyGarage.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Garage.MyGarage.beans.Car;
import Garage.MyGarage.beans.Customer;
import Garage.MyGarage.repositories.CustomerRepository;

@Service
public class CustomerBL {
	@Autowired
	CustomerBL customerBL;

	@Autowired
	CustomerRepository custRepo;

	public List<Customer> getAllCustomers() {
		return custRepo.findAll();
	}

	public Customer findByphoneNum(int phoneNum) {

		try {
			return custRepo.findById(phoneNum).get();
		} catch (Exception e) {
			return null;
		}

	}

	public boolean addCustomer(Customer customer) {

		
		  try {
			  System.out.println("entertd try block");

		  custRepo.save(customer); 
		  System.out.println("it's in DB");
		  return true; 

		  }
		  
		  catch(Exception e) {
		  e.printStackTrace(); return false; }
		 
	}

	public boolean deleteCustomer(int phoneNum) {
		try {
			custRepo.deleteById(phoneNum);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean updatecustomer(Customer customer) {
		try {
			custRepo.save(customer);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
