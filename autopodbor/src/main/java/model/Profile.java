package model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "profile_t")
public class Profile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<City> cities;

	@OneToMany(mappedBy = "profile", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Tariff> tariffs;

	@OneToOne
	private ProfileDetails profileDetails;

	@OneToOne
	private ProfileSubscribe profileSubscribe;

	public Profile() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

//	public List<Tariff> getTariffs() {
//		return tariffs;
//	}
//
//	public void setTariffs(List<Tariff> tariffs) {
//		this.tariffs = tariffs;
//	}

	public List<City> getCities() {
		return cities;
	}

	public void setCities(List<City> cities) {
		this.cities = cities;
	}

	public ProfileSubscribe getProfileSubscribe() {
		return profileSubscribe;
	}

	public void setProfileSubscribe(ProfileSubscribe profileSubscribe) {
		this.profileSubscribe = profileSubscribe;
	}

}
