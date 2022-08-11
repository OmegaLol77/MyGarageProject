package Garage.MyGarage.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
@Entity
@Table(name = "Customer")
public class Customer extends Person {
	
	private int carNum;
	private String password;
	
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * 
	 */
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param phoneNum
	 * @param firstNamertr
	 * @param lastName
	 * @param email
	 */
	public Customer(String firstName, String lastName, String email, String password, int phoneNum) {
		super(firstName, lastName, email, phoneNum);
		setPassword(password);
	}

	public int getCarNum() {
		return carNum;
	}

	public void setCarNum(int carNum) {
		this.carNum = carNum;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + carNum;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
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
		Customer other = (Customer) obj;
		if (carNum != other.carNum)
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Customer [carNum=" + carNum + ", password=" + password + ", getPhoneNum()=" + getPhoneNum()
				+ ", getFirstName()=" + getFirstName() + ", getLastName()=" + getLastName() + ", getEmail()="
				+ getEmail() + ", toString()=" + super.toString() + ", getClass()=" + getClass() + "]";
	}


	



	
}
