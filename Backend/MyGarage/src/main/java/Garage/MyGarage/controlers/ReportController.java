package Garage.MyGarage.controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("addReport")
	public boolean addReport(@RequestBody Report report) {
		if(reportBl.getReport(report.getCarNum()).equals(null)){
			reportBl.addReport(report);
			return true;
		}
		else {
			return false;
		}
	}
	@GetMapping("/{carNum}/getReport")
	public Report getReport(int carNum) {
		return reportBl.getReport(carNum);
	}
	@GetMapping("updateReport")
	public boolean updateReport(@RequestBody Report report) {
		if(!reportBl.getReport(report.getCarNum()).equals(null)) {
			reportBl.updateReport(report);
		return true;
		}
		else {
			return false;
		}
	}
	@GetMapping("/{carNum}/deleteReport")
	public boolean deleteReport(@PathVariable("carNum") int carNum) {
		if(!reportBl.getReport(carNum).equals(null)) {
			reportBl.deleteReport(carNum) ;
		return true;
		}
		else {
			return false;
		}
	}
}
