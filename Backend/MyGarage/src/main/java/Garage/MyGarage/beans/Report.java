package Garage.MyGarage.beans;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name ="Report")
public class Report {

	private String Descripton;
	private Car car;
	private Date date;
	
	public Report() {
		super();
	}

	/**
	 * @param descripton
	 * @param car
	 * @param date
	 */
	public Report(String descripton, Car car, Date date) {
		super();
		Descripton = descripton;
		this.car = car;
		this.date = date;
	}

	public String getDescripton() {
		return Descripton;
	}

	public void setDescripton(String descripton) {
		Descripton = descripton;
	}

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Descripton == null) ? 0 : Descripton.hashCode());
		result = prime * result + ((car == null) ? 0 : car.hashCode());
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
		if (car == null) {
			if (other.car != null)
				return false;
		} else if (!car.equals(other.car))
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
		return "Report [Descripton=" + Descripton + ", car=" + car + ", date=" + date + "]";
	}
	
	
	
	
}
