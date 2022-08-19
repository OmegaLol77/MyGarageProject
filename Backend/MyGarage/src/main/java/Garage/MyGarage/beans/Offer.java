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
		private int approved;
		
		public Offer() {
			super();
		}
		
		public Offer(String ownername, int ownerid, int carnumber, int offer,String date,int approved) {
			super();
			setDate(date);
			setOwnername(ownername);
			setCarnumber(carnumber);
			setOwnerid(ownerid);
			setOffer(offer);
			setApproved(approved);
		}
		
		public int getApproved() {
			return this.approved;
		}

		public void setApproved(int approved) {
			this.approved = approved;
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

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + approved;
			result = prime * result + carnumber;
			result = prime * result + ((currDate == null) ? 0 : currDate.hashCode());
			result = prime * result + offer;
			result = prime * result + ownerid;
			result = prime * result + ((ownername == null) ? 0 : ownername.hashCode());
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Offer other = (Offer) obj;
			if (approved != other.approved)
				return false;
			if (carnumber != other.carnumber)
				return false;
			if (currDate == null) {
				if (other.currDate != null)
					return false;
			} else if (!currDate.equals(other.currDate))
				return false;
			if (offer != other.offer)
				return false;
			if (ownerid != other.ownerid)
				return false;
			if (ownername == null) {
				if (other.ownername != null)
					return false;
			} else if (!ownername.equals(other.ownername))
				return false;
			return true;
		}

		@Override
		public String toString() {
			return "Offer [carnumber=" + carnumber + ", ownername=" + ownername + ", ownerid=" + ownerid + ", offer="
					+ offer + ", currDate=" + currDate + ", approved=" + approved + "]";
		}
		
}
