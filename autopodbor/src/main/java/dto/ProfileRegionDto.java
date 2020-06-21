package dto;

import org.springframework.stereotype.Component;

import model.City;

@Component
public class ProfileRegionDto {

	private long id;
	private RegionDto2 region;
	private City city;

	public long getId() {
		return id;
	}

	public RegionDto2 getRegion() {
		return region;
	}

	public void setRegion(RegionDto2 region) {
		this.region = region;
	}

	public City getCity() {
		return city;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setCity(City city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "ProfileRegionDto [id=" + id + ", region=" + region + ", city=" + city + "]";
	}

}
