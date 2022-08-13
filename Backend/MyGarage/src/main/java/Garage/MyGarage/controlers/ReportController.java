package Garage.MyGarage.controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Garage.MyGarage.beans.Report;
import Garage.MyGarage.bl.ReportBL;

@RestController
@RequestMapping("Report")
@CrossOrigin
public class ReportController {

	@Autowired
	ReportBL reportBl;
	
	@PostMapping("addReport")
	public boolean addReport(@RequestBody Report report) {
		try {
			reportBl.addReport(report);
			
			return true;
		
		}
		catch (Exception e) {
		e.printStackTrace();
		return false;
		}
			
	
	}
	@GetMapping("/{carNum}/getReport")
	public Report getReport(@PathVariable("carNum")int carNum) {
		System.out.println("controller is being called  car num  "+carNum);
		return reportBl.getReport(carNum);
	}
	
	@GetMapping("/{approved}/getNotApproved")
	public Report getNotApproved(@PathVariable("approved")boolean approved) {
		System.out.println("controller is being called  car num  "+approved);
		return reportBl.getNotApprovedReport(approved);
	}
	
	@PostMapping("updateReport")
	public boolean updateReport(@RequestBody Report report) {
		if(!reportBl.getReport(report.getCarNum()).equals(null)) {
			reportBl.updateReport(report);
		return true;
		}
		else {
			return false;
		}
	}
	@DeleteMapping("/{carNum}/deleteReport")
	public boolean deleteReport(@PathVariable("carNum") int carNum) {
		
			reportBl.deleteReport(carNum) ;
		return true;
		
		
	}
}
