package Garage.MyGarage.controlers;

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

import Garage.MyGarage.beans.Admin;
import Garage.MyGarage.beans.Car;
import Garage.MyGarage.beans.Offer;
import Garage.MyGarage.bl.OfferBL;


@RestController
@RequestMapping("Offer")
@CrossOrigin
public class OfferController {
	@Autowired
	OfferBL OfferBL;
	
	
	@GetMapping("getAllCheckedCars")
	public List<Car>getAllCheckedCars(){
		return OfferBL.getAllCheckedCars();
	}
	
	
	@GetMapping("getAllOffers")
	public List<Offer> getAllOffers(){
		return OfferBL.getAllOffers();
	}
	
	@GetMapping("/{carnumber}/findOfferByCarnum")
	public List<Offer> findOfferByCarnum(@PathVariable("carnumber") Integer carnumber) {
		return OfferBL.findOfferById(carnumber);
	}
	
	@PostMapping("addOffer")
	public boolean addOffer(@RequestBody Offer offer) {
		try {
			
			OfferBL.addOffer(offer);
			return true;
		}
		catch (Exception e) {
			return false;		} 
			
		
	}
	@DeleteMapping("/{carnum}/deleteOffer")
	public boolean deleteAdmin(@PathVariable("carnumber") Integer carnum) {
		if(!OfferBL.findOfferById(carnum).equals(null)) {
			OfferBL.deleteOffer(carnum);
			return true;
		}
		else {
			return false;
		}
		
	}
	
	@PostMapping("/{carnum}/updateOffer")
	public boolean updateAdmin(@PathVariable("carnumber") Integer carnum,@RequestBody Offer offer) {
		
		if(!OfferBL.findOfferById(carnum).equals(null)) {
			OfferBL.updateOffer(offer);
			return true;
		}
		else {
			return false;
		}
	}
}
