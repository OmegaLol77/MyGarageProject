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
	
	@GetMapping("/{phoneNum}/findAdminByphoneNum")
	public Admin findAdminByphoneNum(@PathVariable("findByphoneNum") Integer phoneNum) {
		return AdminBL.getAdminByphoneNum(phoneNum);
	}
	
	@PostMapping("addAdmin")
	public boolean addCustomer(@RequestBody Admin admin) {
		if(AdminBL.getAdminByphoneNum(admin.getPhoneNum()).equals(null)){
			AdminBL.addAdmin(admin);
			return true;
		}
		else {
			return false;
		}
	}
	@DeleteMapping("/{phoneNum}/delteAdmin")
	public boolean delteAdmin(@PathVariable("phoneNum")int phoneNum) {
		if(!AdminBL.getAdminByphoneNum(phoneNum).equals(null)) {
			AdminBL.deleteAdmin(phoneNum);
			return true;
		}
		else {
			return false;
		}
		
	}
	
	@PostMapping("/{phoneNum}/updateAdmin")
	public boolean updateAdmin(@PathVariable("phoneNum") int phoneNum,@RequestBody Admin admin) {
		
		if(!AdminBL.getAdminByphoneNum(phoneNum).equals(null)) {
			AdminBL.updateAdmin(admin);
			return true;
		}
		else {
			return false;
		}
	}
	
}
