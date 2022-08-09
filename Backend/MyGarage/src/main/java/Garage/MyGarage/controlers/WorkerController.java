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

import Garage.MyGarage.beans.Worker;
import Garage.MyGarage.bl.WorkerBL;

@RestController
@RequestMapping("Worker")
@CrossOrigin
public class WorkerController {
@Autowired
WorkerBL workerBL;

@GetMapping("getAllWorkers")
public List<Worker> getAllWorkers(){
	return workerBL.getAllWorkers();
}


@GetMapping("/{phoneNum}/findWorkerByphoneNum")
public Worker findWorkerByEmail(@PathVariable("phoneNum") Integer phoneNum) {
	System.out.println(phoneNum);
	return workerBL.findByphoneNum(phoneNum);
}

@PostMapping("addWorker")
public boolean addWorker(@RequestBody Worker worker) {
	if(workerBL.findByphoneNum(worker.getPhoneNum()).equals(null)){
		workerBL.addWorker(worker);
		return true;
	}
	else {
		return false;
	}
}
@DeleteMapping("/{phoneNum}/deleteWorker")
public boolean deleteWorker(@PathVariable("phoneNum") Integer phoneNum) {
	if(!workerBL.findByphoneNum(phoneNum).equals(null)) {
		workerBL.deleteWorker(phoneNum);
		return true;
	}
	else {
		return false;
	}
	
}

@PostMapping("/{phoneNum}/updateWorker")
public boolean updateWorker(@PathVariable("phoneNum") Integer phoneNum,@RequestBody Worker worker) {
	
	if(!workerBL.findByphoneNum(phoneNum).equals(null)) {
		workerBL.updateWorker(worker);
		return true;
	}
	else {
		return false;
	}
}

}
