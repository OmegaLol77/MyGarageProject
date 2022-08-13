package Garage.MyGarage.beans;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Offer {
	 
		@Id
		private int carnumber;
		
		private String ownername;
		private int ownerid;
		private int offer;
		private String currDate;
		
		public Offer() {
			super();
		}
		
		public Offer(String ownername, int ownerid, int carnumber, int offer) {
			super();
			SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
			Date date = new Date();
			setDate(formatter.format(date));
			setOwnername(ownername);
			setCarnumber(carnumber);
			setOwnerid(ownerid);
			setOffer(offer);
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
			return currDate;
		}
		public void setDate(String date) {
			this.currDate = date;
		}
		public void setOffer(int offer) {
			this.offer = offer;
		}
		public int getOffer() {
			return offer;
		}
}
