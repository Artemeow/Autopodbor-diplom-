package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "profile_details_t")
public class ProfileDetails {

	@Id
	private long id;
	private String title;
	private String specification;
	private String address;
	private String experience;
	private String email;
	private String phone;
	private String site;

	public ProfileDetails() {
	}

	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getSpecification() {
		return specification;
	}

	public String getAddress() {
		return address;
	}

	public String getExperience() {
		return experience;
	}

	public String getEmail() {
		return email;
	}

	public String getPhone() {
		return phone;
	}

	public String getSite() {
		return site;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setSpecification(String specification) {
		this.specification = specification;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setSite(String site) {
		this.site = site;
	}

}
