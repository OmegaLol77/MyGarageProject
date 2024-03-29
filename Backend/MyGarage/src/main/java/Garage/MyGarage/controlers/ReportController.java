package Garage.MyGarage.controlers;

import java.text.SimpleDateFormat;
import java.util.Date;
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

import Garage.MyGarage.beans.Car;
import Garage.MyGarage.beans.Report;
import Garage.MyGarage.bl.ReportBL;

@RestController
@RequestMapping("Report")
@CrossOrigin
public class ReportController {

	@Autowired
	ReportBL reportBl;
	
	@PostMapping("/{carNum}/&{descripton}/addReport")
	public boolean addReport(@PathVariable("carNum")int carNum,@PathVariable("descripton")String descripton) {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
		Date date = new Date();
		Report x = new Report(carNum,descripton,date.toString(),0);
		try {
			return	reportBl.addReport(x);
		}
		catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@GetMapping("/{carNum}/getReport")
	public Report getReport(@PathVariable("carNum")int carNum) {
		return reportBl.getReport(carNum);
	}
	
	@GetMapping("/{carNum}/getSpecificReport")
	public List<Report> getSpecificReport(@PathVariable("carNum")int carNum) {
		return reportBl.getSpecificReport(carNum);
	}
	
	@GetMapping("/{approved}/getNotApproved")
	public List<Report> getNotApproved(@PathVariable("approved")int approved) {
		return reportBl.getNotApprovedReport(approved);
	}
	
	@PostMapping("/{carNum}/&{descripton}/&{date}/updateReport")
	public boolean updateReport(@PathVariable("carNum")int carNum,@PathVariable("descripton")String descripton,@PathVariable("descripton")String date) {
		if(!reportBl.getReport(carNum).equals(null)) {
			Report x = new Report(carNum,descripton,date,1);
			reportBl.updateReport(x);
		return true;
		}
		else {
			return false;
		}
	}
	
//	@PostMapping("updateReport")
//	public boolean updateReport(@RequestBody Report report){
//		if(report.getCarNum()!=0 && report.getDescripton().equals("")==false && report.getDate().equals("")==false) {
//			return reportBl.updateReport(report);
//			}
//		return false;
//	}
	
	@DeleteMapping("/{carNum}/deleteReport")
	public boolean deleteReport(@PathVariable("carNum") int carNum) {
		reportBl.deleteReport(carNum) ;
		return true;
	}
}
