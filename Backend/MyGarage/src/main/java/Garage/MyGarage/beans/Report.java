package Garage.MyGarage.beans;

import java.sql.Date;
import java.text.SimpleDateFormat;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name ="Report")
public class Report {
	private String Descripton;
	 @Id 
	private int carNum;
   private Date date;
	public Report() {
		super();
	}


	
	/**
	 * @param id
	 * @param descripton
	 * @param carNum
	 * @param date
	 */
	public Report( String descripton, int carNum) {
		super();
		SimpleDateFormat formatter= new SimpleDateFormat("dd/mm/yyyy HH:mm:ss");
		Descripton = descripton;
		this.carNum = carNum;
		//setDate(this.date);  	
		}

	

	
	public String getDescripton() {
		return Descripton;
	}

	public void setDescripton(String descripton) {
		Descripton = descripton;
	}

	
	public int getCarNum() {
		return carNum;
	}



	public void setCarNum(int carNum) {
		this.carNum = carNum;
	}



	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date ;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Descripton == null) ? 0 : Descripton.hashCode());
		result = prime * result + carNum;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
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
		Report other = (Report) obj;
		if (Descripton == null) {
			if (other.Descripton != null)
				return false;
		} else if (!Descripton.equals(other.Descripton))
			return false;
		if (carNum != other.carNum)
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Report [Descripton=" + Descripton + ", carNum=" + carNum + ", date=" + date + "]";
	}
	
	
	
	
}