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
import Garage.MyGarage.beans.Worker;
import Garage.MyGarage.bl.WorkerBL;

@RestController
@RequestMapping("Worker")
@CrossOrigin
public class WorkerController {
@Autowired WorkerBL workerBL;

@GetMapping("getAllWorkers")
public List<Worker> getAllWorkers(){
	return workerBL.getAllWorkers();
}
public boolean addWorker(Worker worker) {
	
	try {
		workerBL.addWorker(worker);
		return true;
	}
	catch (Exception e) {
	e.printStackTrace();
	return false;
	}
}

@GetMapping("/{Email}/findWorkerByEmail")
public Worker findAdminByEmail(@PathVariable("findWorkerByEmail") String Email) {
	return workerBL.findWorkerByEmail(Email);
}

@PostMapping("addWorker")
public boolean addCustomer(@RequestBody Worker worker) {
	if(workerBL.findWorkerByEmail(worker.getEmail()).equals(null)){
		workerBL.addWorker(worker);
		return true;
	}
	else {
		return false;
	}
}
@DeleteMapping("/{Email}/delteWorker")
public boolean delteAdmin(@PathVariable("Email")String Email) {
	if(!workerBL.findWorkerByEmail(Email).equals(null)) {
		workerBL.deleteWorker(Email);
		return true;
	}
	else {
		return false;
	}
	
}

@PostMapping("/{Email}/updateWorker")
public boolean updateWorker(@PathVariable("phoneNum") String Email,@RequestBody Worker worker) {
	
	if(!workerBL.findWorkerByEmail(Email).equals(null)) {
		workerBL.updateWorker(worker);
		return true;
	}
	else {
		return false;
	}
}

}
