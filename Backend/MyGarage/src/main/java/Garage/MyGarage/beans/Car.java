package Garage.MyGarage.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Car {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String ownername;
	private int carnumber;
	private int ownerid;
	private String date;
	
	public Car() {
		super();
	}
	
	public Car(String ownername, int ownerid, int carnumber, String date) {
		super();
		setOwnername(ownername);
		setCarnumber(carnumber);
		setDate(date);
		setOwnerid(ownerid);
	}
	
	public String getOwnername() {
		return ownername;
	}
	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}
	public int getCarnumber() {
		return carnumber;
	}
	public void setCarnumber(int carnumber) {
		this.carnumber = carnumber;
	}
	public int getOwnerid() {
		return ownerid;
	}
	public void setOwnerid(int ownerid) {
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
	
	
	
}
