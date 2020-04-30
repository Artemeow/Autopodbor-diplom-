package model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "city_t")
public class City {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Region region;

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Region getRegion() {
		return region;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	public City() {
	}

}
