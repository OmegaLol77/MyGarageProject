package Garage.MyGarage.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import Garage.MyGarage.beans.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
