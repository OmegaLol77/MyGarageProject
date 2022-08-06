package Garage.MyGarage.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Car")
public class Car {
	 
	@Id
	@GeneratedValue
	private int id;
	
	private String ownername;
	private String carnumber;
	private String ownerid;
	private String carproccess;
	private String date;
	
	public Car() {
		super();
	}
	
	public Car(String ownername, String ownerid, String carnumber, String date, String carproccess) {
		super();
		setOwnername(ownername);
		setCarnumber(carnumber);
		setDate(date);
		setOwnerid(ownerid);
		setCarproccess(carproccess);
	}
	
	public Car(String ownername, String ownerid, String carnumber, String date, String carproccess, int id) {
		super();
		setOwnername(ownername);
		setCarnumber(carnumber);
		setDate(date);
		setOwnerid(ownerid);
		setCarproccess(carproccess);
		this.id = id;
	}
	
	public String getOwnername() {
		return ownername;
	}
	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}
	public String getCarnumber() {
		return carnumber;
	}
	public void setCarnumber(String carnumber) {
		this.carnumber = carnumber;
	}
	public String getOwnerid() {
		return ownerid;
	}
	public void setOwnerid(String ownerid) {
		this.ownerid = ownerid;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setCarproccess(String carproccess) {
		this.carproccess = carproccess;
	}
	public String getCarproccess() {
		return carproccess;
	}
	
	
}
