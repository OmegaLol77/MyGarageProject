package Garage.MyGarage.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
@Entity
@Table(name = "Admin")
public class Admin extends Person {

	@GeneratedValue
	private int id;
	/**
	 * 
	 */
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param phoneNum
	 * @param firstName
	 * @param lastName
	 * @param email
	 */
	public Admin( int phoneNum, String firstName, String lastName, String email) {
		super( phoneNum, firstName, lastName, email);
		// TODO Auto-generated constructor stub
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Admin other = (Admin) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", getPhoneNum()=" + getPhoneNum() + ", getFirstName()=" + getFirstName()
				+ ", getLastName()=" + getLastName() + ", getEmail()=" + getEmail() + ", getId()=" + getId()
				+ ", toString()=" + super.toString() + ", getClass()=" + getClass() + "]";
	}
	

}
