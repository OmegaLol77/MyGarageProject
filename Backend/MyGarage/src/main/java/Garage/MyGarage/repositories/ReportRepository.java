package Garage.MyGarage.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import Garage.MyGarage.beans.Report;

public interface ReportRepository extends JpaRepository<Report, Integer> {
	
	public Report findByapproved(boolean approved);

}
