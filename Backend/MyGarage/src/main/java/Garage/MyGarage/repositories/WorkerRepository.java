package Garage.MyGarage.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import Garage.MyGarage.beans.Worker;

public interface WorkerRepository extends JpaRepository<Worker, String>{

}
