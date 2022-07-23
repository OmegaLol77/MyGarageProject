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
	
	try {
		return reportRepo.getById(carNum);
		
		}
	catch (Exception e) {
		e.printStackTrace();
		return null;
	}
	}
		public boolean addReport(Report report) {
			
				if(getReport(report.getCarNum())==null) {
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
		if(getReport(report.getCarNum())!=null) {
			
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
		if(getReport(carNum)!=null) {
		try {
			reportRepo.deleteById(carNum);
			return true;
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
			
		}
		}
		else {
			return false;

			
		}
		
	}
	

}
