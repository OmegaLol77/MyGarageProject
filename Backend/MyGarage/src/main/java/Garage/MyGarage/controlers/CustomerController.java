package Garage.MyGarage.controlers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Garage.MyGarage.beans.Customer;
import Garage.MyGarage.bl.CustomerBL;

@RestController
@RequestMapping("Customer")
@CrossOrigin
public class CustomerController {

	@Autowired
	CustomerBL customerBL;
	
	
	@GetMapping("getAllCustomers")
	public List<Customer> getAllCustomers(){
		return customerBL.getAllCustomers();
	}
	
	@GetMapping("/{Email}/findCustomerByEmail")
	public Customer findCustomerByphoneNum(@PathVariable("Email") String Email) {
		return customerBL.getCustomerByEmail(Email);
	}
	
	@PostMapping("addCustomer")
	public boolean addCustomer(@RequestBody Customer customer) {
		if(customerBL.getCustomerByEmail(customer.getEmail()).equals(null)){
			
			customerBL.addCustomer(customer);
			return true;
		}
		else {
			return false;
		}
	}
	@DeleteMapping("/{Email}/delteCustomer")
	public boolean delteCustomer(@PathVariable("Email")String Email) {
		if(!customerBL.getCustomerByEmail(Email).equals(null)) {
			customerBL.deleteCustomer(Email);
			return true;
		}
		else {
			return false;
		}
		
	}
	
	@PostMapping("/{Email}/updateCustomer")
	public boolean updateCustomer(@PathVariable("Email") String Email,@RequestBody Customer customer) {
		
		if(!customerBL.getCustomerByEmail(Email).equals(null)) {
			customerBL.updatecustomer(customer);
			return true;
		}
		else {
			return false;
		}
	}
	
}
