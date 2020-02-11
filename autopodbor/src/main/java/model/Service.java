package model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name="service_t")
public class Service {
	private long id;
	private String name;
	private User user;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	public User getUser() {
		return user;
	}
	public String getName() {
		return name;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Service [id=" + id + ", name=" + name + "]";
	}

}
