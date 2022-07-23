package Garage.MyGarage.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Garage.MyGarage.beans.Admin;
import Garage.MyGarage.beans.Offer;
import Garage.MyGarage.repositories.OfferRepository;

@Service
public class OfferBL {
	@Autowired
	OfferBL offerBL;
	
	@Autowired
	OfferRepository offerRepo;
	
	
	public List<Offer> getAllOffers(){
		return offerRepo.findAll();
	}
	
	public Offer findOfferById(int carnum) {
		try {
			return offerRepo.findById(carnum).get();
		} catch (Exception e) {
			return null;
		}
	}
	
	public boolean addOffer(Offer offer) {
		try {
			offerRepo.save(offer);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
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
}
