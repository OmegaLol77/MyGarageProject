package Garage.MyGarage.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import Garage.MyGarage.beans.Offer;

public interface OfferRepository extends JpaRepository<Offer, Integer>{

}
