package Garage.MyGarage.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.Table;
import javax.persistence.InheritanceType;
import javax.persistence.Lob;
import javax.persistence.MappedSuperclass;

@MappedSuperclass

@Table(name = "Person")
public class Person {
	
	/*Create person Bean*/
	
	private int PhoneNum; 
	private String FirstName;
	private String LastName;
	private String Email;
	@Id
	private int id;
	

	/**
	 * 
	 */
	public Person() {
		super();
	}
	/**
	 * @param phoneNum
	 * @param firstName
	 * @param lastName
	 * @param email
	 */
	public Person(String firstName, String lastName, String email, int phoneNum, int id) {
		super();
		setPhoneNum(phoneNum);
		setFirstName(firstName);
		setLastName(lastName);
		setEmail(email);
		setId(id);
	}
	
	

	
	public int getPhoneNum() {
		return PhoneNum;
	}
	public void setPhoneNum(int phoneNum) {
		PhoneNum = phoneNum;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Email == null) ? 0 : Email.hashCode());
		result = prime * result + ((FirstName == null) ? 0 : FirstName.hashCode());
		result = prime * result + ((LastName == null) ? 0 : LastName.hashCode());
		result = prime * result + PhoneNum;
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
		Person other = (Person) obj;
		if (Email == null) {
			if (other.Email != null)
				return false;
		} else if (!Email.equals(other.Email))
			return false;
		if (FirstName == null) {
			if (other.FirstName != null)
				return false;
		} else if (!FirstName.equals(other.FirstName))
			return false;
		if (LastName == null) {
			if (other.LastName != null)
				return false;
		} else if (!LastName.equals(other.LastName))
			return false;
		if (PhoneNum != other.PhoneNum)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Person [PhoneNum=" + PhoneNum + ", FirstName=" + FirstName + ", LastName=" + LastName + ", Email="
				+ Email + "]";
	}
	
	
	
	
	
	
	
	
}
