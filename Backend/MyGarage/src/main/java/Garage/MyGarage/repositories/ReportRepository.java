package Garage.MyGarage.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import Garage.MyGarage.beans.Report;

public interface ReportRepository extends JpaRepository<Report, Integer> {
	
	public List<Report> findByapproved(int approved);

}
