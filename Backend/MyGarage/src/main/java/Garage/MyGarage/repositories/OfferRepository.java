package Garage.MyGarage.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import Garage.MyGarage.beans.Offer;

public interface OfferRepository extends JpaRepository<Offer, Integer>{
	
	public List<Offer> findBycarnumber(int carnumber);


}
