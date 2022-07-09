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

import Garage.MyGarage.beans.Admin;
import Garage.MyGarage.bl.AdminBL;

@RestController
@RequestMapping("Admin")
@CrossOrigin
public class AdminController {
	@Autowired
	AdminBL AdminBL;
	
	
	@GetMapping("getAllAdmins")
	public List<Admin> getAllAdmins(){
		return AdminBL.getAllAdmins();
	}
	
	@GetMapping("/{Email}/findAdminByEmail")
	public Admin findAdminByEmail(@PathVariable("Email") String Email) {
		return AdminBL.findAdminByEmail(Email);
	}
	
	@PostMapping("addAdmin")
	public boolean addCustomer(@RequestBody Admin admin) {
		if(AdminBL.findAdminByEmail(admin.getEmail()).equals(null)){
			AdminBL.addAdmin(admin);
			return true;
		}
		else {
			return false;
		}
	}
	@DeleteMapping("/{Email}/deleteAdmin")
	public boolean deleteAdmin(@PathVariable("Email") String Email) {
		if(!AdminBL.findAdminByEmail(Email).equals(null)) {
			AdminBL.deleteAdmin(Email);
			return true;
		}
		else {
			return false;
		}
		
	}
	
	@PostMapping("/{Email}/updateAdmin")
	public boolean updateAdmin(@PathVariable("phoneNum") String Email,@RequestBody Admin admin) {
		
		if(!AdminBL.findAdminByEmail(Email).equals(null)) {
			AdminBL.updateAdmin(admin);
			return true;
		}
		else {
			return false;
		}
	}
	
}
