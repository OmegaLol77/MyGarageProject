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
	
	public Admin findAdminByphoneNum(int phoneNum) {
		try {
			return adminRepo.findById(phoneNum).get();
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
	
	public boolean deleteAdmin(int phoneNum) {
		try {
			adminRepo.deleteById(phoneNum);
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
