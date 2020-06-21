package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "subscribe_t")
public class Subscribe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String duration;
	private int days;
	private int price;

	public Subscribe() {
	}

	
	public int getDays() {
		return days;
	}


	public void setDays(int days) {
		this.days = days;
	}


	public long getId() {
		return id;
	}

	public int getPrice() {
		return price;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	@Override
	public String toString() {
		return "Subscribe [id=" + id + ", duration=" + duration + ", price=" + price + "]";
	}
	
}
