package Garage.MyGarage.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Garage.MyGarage.beans.Report;
import Garage.MyGarage.repositories.ReportRepository;

@Service
public class ReportBL {
@Autowired
ReportBL reportBl;
@Autowired
ReportRepository reportRepo;

public Report getReport(int carNum) {
	if(ReportExists(carNum)==false) {
	try {
		Report x=reportRepo.getById(carNum);
		return x;
		
		}
	catch (Exception e) {
		e.printStackTrace();
		return null;
	}
	}
	else {
		return null;
	}
}
	
	public boolean ReportExists(int carNum) {
		try {
			boolean x=reportRepo.existsById(carNum);
			return x;
			
			}
		catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	
		public boolean addReport(Report report) {
			
				if(ReportExists(report.getCarNum())==false) {
					try {
					reportRepo.save(report);
					return true;
				}
					catch (Exception e) {
						e.printStackTrace();
						return false;
					}
					
			}
				else {
					return false;
				}
				
			}
		
	public boolean updateReport(Report report) {
		if(ReportExists(report.getCarNum())==true) {
			
			try {
				reportRepo.save(report);	
				return true;
			}
			catch (Exception e) {
				e.printStackTrace();
				return false;
			}
			
		
		}
		else {
			return false;
		}
		
	}
	public boolean deleteReport(int carNum) {
		if(ReportExists(carNum)==true) {
		try {
			reportRepo.deleteById(carNum);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
			
		
		}}
		else {
			return false;
		}
		
	
		
	}
	

}
