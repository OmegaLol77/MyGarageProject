package Garage.MyGarage.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Garage.MyGarage.beans.Admin;
import Garage.MyGarage.beans.Car;
import Garage.MyGarage.repositories.AdminRepository;

@Service
public class AdminBL {
	@Autowired
	AdminBL adminBL;
	@Autowired
	AdminRepository adminRepo;
	
	public List<Admin> getAllAdmins(){
		return adminRepo.findAll();
	}
	
	public Admin findAdminByEmail(String Email) {
		try {
			return adminRepo.findById(Email).get();
		} catch (Exception e) {
			return null;
		}
	}
	
	public boolean addAdmin(Admin admin) {
		try {
			adminRepo.save(admin);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public boolean deleteAdmin(String Email) {
		try {
			adminRepo.deleteById(Email);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public boolean updateAdmin(Admin admin) {
		try {
			adminRepo.save(admin);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
