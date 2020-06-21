package model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "profile_region_t")
public class ProfileRegion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@OneToOne(fetch = FetchType.EAGER)
	private Region region;
	@OneToOne(fetch = FetchType.EAGER)
	private City city;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Region getRegion() {
		return region;
	}

	public City getCity() {
		return city;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	public void setCity(City city) {
		this.city = city;
	}

}
