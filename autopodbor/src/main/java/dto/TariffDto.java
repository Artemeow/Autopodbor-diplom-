package dto;

import org.springframework.stereotype.Component;

import model.TariffType;

@Component
public class TariffDto {

	private long id;
	private TariffType type;
	private int price;
//	private Profile profile;
	private String name;
	
	public long getId() {
		return id;
	}
	public int getPrice() {
		return price;
	}
//	public Profile getProfile() {
//		return profile;
//	}
	public void setId(long id) {
		this.id = id;
	}

	public void setPrice(int price) {
		this.price = price;
	}
//	public void setProfile(Profile profile) {
//		this.profile = profile;
//	}
	public TariffType getType() {
		return type;
	}
	public void setType(TariffType type) {
		this.type = type;
		this.name = type.getName();
	}
	public String getName() {
		return name;
	}
}
