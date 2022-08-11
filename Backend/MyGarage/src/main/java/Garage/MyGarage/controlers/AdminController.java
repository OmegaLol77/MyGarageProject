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
	public Admin findAdminByphone(@PathVariable("phoneNum") Integer phoneNum) {
		return AdminBL.findAdminByphoneNum(phoneNum);
	}
	
	@PostMapping("addAdmin")
	public boolean addAdmin(@RequestBody Admin admin) {
		if(AdminBL.findAdminByphoneNum(admin.getPhoneNum())==null){
			AdminBL.addAdmin(admin);
			return true;
		}
		else {
			return false;
		}
	}
	@DeleteMapping("/{phoneNum}/deleteAdmin")
	public boolean deleteAdmin(@PathVariable("phoneNum") Integer phoneNum) {
		if(!AdminBL.findAdminByphoneNum(phoneNum).equals(null)) {
			AdminBL.deleteAdmin(phoneNum);
			return true;
		}
		else {
			return false;
		}
		
	}
	
	@PostMapping("/{phoneNum}/updateAdmin")
	public boolean updateAdmin(@PathVariable("phoneNum") Integer phoneNum,@RequestBody Admin admin) {
		
		if(!AdminBL.findAdminByphoneNum(phoneNum).equals(null)) {
			AdminBL.updateAdmin(admin);
			return true;
		}
		else {
			return false;
		}
	}
	
}
