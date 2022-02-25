package Garage.MyGarage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import Garage.MyGarage.beans.Admin;
import Garage.MyGarage.bl.AdminBL;
import Garage.MyGarage.repositories.AdminRepository;

@SpringBootApplication
public class MyGarageApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyGarageApplication.class, args);
		
		
	}

}
