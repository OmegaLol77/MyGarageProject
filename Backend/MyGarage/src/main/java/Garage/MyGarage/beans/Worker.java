package Garage.MyGarage.beans;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
@Entity
@Table(name = "worker")
public class Worker extends Person {
	private int WorkerID;
	private String password;
	
	public Worker() {
		super();
	}
	
	/**
	 * @param phoneNum
	 * @param firstName
	 * @param lastName
	 * @param email
	 */
	public Worker(String firstName, String lastName, String email, String password, int phoneNum) {
		super(firstName, lastName, email, phoneNum);
		setPassword(password);
	}

	public int getWorkerID() {
		return WorkerID;
	}


	public void setWorkerID(int workerID) {
		WorkerID = workerID;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + WorkerID;
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
		Worker other = (Worker) obj;
		if (WorkerID != other.WorkerID)
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
		return "Worker [WorkerID=" + WorkerID + ", password=" + password + "]";
	}
	
	
}
