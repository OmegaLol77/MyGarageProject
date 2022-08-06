package Garage.MyGarage.controlers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
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
	
	@GetMapping("/{phoneNum}/findCustomerByphoneNum")
	public Customer findCustomerByphoneNum(@PathVariable("phoneNum") Integer phoneNum) {
		return customerBL.findByphoneNum(phoneNum);
	}
	
	@PostMapping("addCustomer")
	public boolean addCustomer(@RequestBody Customer customer) {	
		if(customerBL.findByphoneNum(customer.getPhoneNum())==null){
			customerBL.addCustomer(customer);
			System.out.println("it got inserted ");
			return true;
		}
		else {
			System.out.println("it's already in the Db");
			return false;
		}
			
		
	
	}
	@DeleteMapping("/{phoneNum}/deleteCustomer")
	public boolean deleteCustomer(@PathVariable("phoneNum") Integer phoneNum) {
		if(!customerBL.findByphoneNum(phoneNum).equals(null)) {
			customerBL.deleteCustomer(phoneNum);
			return true;
		}
		else {
			return false;
		}
		
	}
	
	@PostMapping("/{phoneNum}/updateCustomer")
	public boolean updateCustomer(@PathVariable("phoneNum") Integer phoneNum,@RequestBody Customer customer) {
		
		if(!customerBL.findByphoneNum(phoneNum).equals(null)) {
			customerBL.updatecustomer(customer);
			return true;
		}
		else {
			return false;
		}
	}
	
}
