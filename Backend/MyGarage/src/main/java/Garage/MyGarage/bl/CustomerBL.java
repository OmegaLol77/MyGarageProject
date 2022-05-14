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
	
	
	public List<Customer> getAllCustomers(){
		return custRepo.findAll();
	}
	
	public Customer getCustomerByEmail(String Email) {
		
		try {
			return custRepo.findById(Email).get();
		} catch (Exception e) {
			return null;
		}
		 
	}
	
	public boolean addCustomer(Customer customer) {
		System.out.println("email"+customer.getEmail());
		System.out.println("firstName"+customer.getFirstName());
		System.out.println("lastName"+customer.getLastName());
		System.out.println("pass"+customer.getPassword());
		/*
		 * try {
		 * 
		 * custRepo.save(customer); return true; }catch(Exception e) {
		 * e.printStackTrace(); return false; }
		 */
		return true;
	}
	

	public boolean deleteCustomer(String Email) {
		try {
			custRepo.deleteById(Email);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public boolean updatecustomer(Customer customer) {
		try {
			custRepo.save(customer);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
