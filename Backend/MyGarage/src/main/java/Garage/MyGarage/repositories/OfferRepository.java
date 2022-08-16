package Garage.MyGarage.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import Garage.MyGarage.beans.Car;
import Garage.MyGarage.beans.Offer;

public interface OfferRepository extends JpaRepository<Offer, Integer>{
	
	public List<Offer> findBycarnumber(int carnumber);
	
	@Query(value = "SELECT * FROM offer where carnumber = ?1 AND approved =?2 ", nativeQuery = true)
	List<Offer> findMyOffers(int carnumber,int approved);

	@Query(value = "SELECT * FROM offer where approved =?1 ", nativeQuery = true)
	List<Offer> findDeclinedOffers(int approved);
	
	@Query(value = "SELECT * FROM offer where approved =?1 ", nativeQuery = true)
	List<Offer> findApprovedOffers(int approved);
}
