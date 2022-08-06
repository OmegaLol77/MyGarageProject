package Garage.MyGarage.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Garage.MyGarage.beans.Admin;
import Garage.MyGarage.beans.Worker;
import Garage.MyGarage.repositories.WorkerRepository;

@Service
public class WorkerBL {
@Autowired
WorkerBL workerBL;
@Autowired
WorkerRepository workerRepo;

public List<Worker> getAllWorkers(){
	return workerRepo.findAll();
}

public Worker findWorkerByEmail(String Email) {
	
	return workerRepo.getById(Email.hashCode());
}

public boolean addWorker(Worker worker) {
	try {
		workerRepo.save(worker);
		return true;
	}
	catch (Exception e) {
		e.printStackTrace();
		return false;
	}
}

public boolean deleteWorker(String Email) {
	try {
		workerRepo.deleteById(Email.hashCode());	
		return true;
	}
	catch (Exception e) {
		e.printStackTrace();
		return false;
	}
	
}

public boolean updateWorker(Worker worker) {
	try {
		workerRepo.save(worker);
		return true;
	}catch(Exception e) {
		e.printStackTrace();
		return false;
	}
}

}
