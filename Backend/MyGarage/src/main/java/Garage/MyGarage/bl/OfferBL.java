package Garage.MyGarage.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import Garage.MyGarage.beans.Admin;
import Garage.MyGarage.beans.Car;
import Garage.MyGarage.beans.Offer;
import Garage.MyGarage.repositories.CarRepository;
import Garage.MyGarage.repositories.OfferRepository;

@Service
public class OfferBL {
	@Autowired
	OfferBL offerBL;
	
	@Autowired
	OfferRepository offerRepo;
	@Autowired
	CarRepository carRepo;
	
	public void approveOffer(int carnum) {
		carRepo.UpdateCarProcessapproved(carnum);
	}
	public void declineOffer(int carnum) {
		carRepo.UpdateCarProcessdeclined(carnum);
	}
	
	
	public List<Car> getAllCheckedCars(){
		return carRepo.getAllCheckedCars();
	}
	
	public List<Offer> findMyOffers(int carnumber,int approved){
		return offerRepo.findMyOffers(carnumber,approved);
	}
	
	public List<Offer> findFinishedOffers(int carnumber,int approved){
		return offerRepo.findFinishedOffers(carnumber,approved);
	}
	
	public List<Offer> findApprovedOffers(int approved){
		return offerRepo.findApprovedOffers(approved);
	}
	
	public List<Offer> findDeclinedOffers(int approved){
		return offerRepo.findDeclinedOffers(approved);
	}
	public List<Offer> getAllOffers(){
		return offerRepo.findAll();
	}
	
	public List<Offer> findOfferById(int carnumber) {
		try {
			return offerRepo.findBycarnumber(carnumber);
		} catch (Exception e) {
			return null;
		}
	}
	
	public boolean addOffer(Offer offer) {
		try {
			offerRepo.save(offer);
			carRepo.UpdatePendingOfferCarProcess(offer.getCarnumber());
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}}
		
	public boolean deleteOffer(int carnum) {
		try {
			offerRepo.deleteById(carnum);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public boolean updateOffer(Offer offer) {
		try {
			offerRepo.save(offer);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	public boolean offerExists(int carNum) {
		try {
			boolean x=offerRepo.existsById(carNum);
			return x;
			}
		catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
