package model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@Column(unique = false)
	private List<ProfileRegion> regions;

	@OneToMany(fetch = FetchType.LAZY)
	private List<Tariff> tariffs;

	@OneToOne
	private ProfileDetails profileDetails;

	@OneToOne
	private ProfileSubscribe profileSubscribe;

	private boolean confirmed;
	private boolean blocked;

	public Profile() {
	}

	public long getId() {
		return id;
	}

	public boolean getConfirmed() {
		return confirmed;
	}

	public boolean getBlocked() {
		return blocked;
	}

	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}

	public void setBlocked(boolean blocked) {
		this.blocked = blocked;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Tariff> getTariffs() {
		return tariffs;
	}

	public ProfileDetails getProfileDetails() {
		return profileDetails;
	}

	public void setTariffs(List<Tariff> tariffs) {
		this.tariffs = tariffs;
	}

	public void setProfileDetails(ProfileDetails profileDetails) {
		this.profileDetails = profileDetails;
	}


	public ProfileSubscribe getProfileSubscribe() {
		return profileSubscribe;
	}

	public void setProfileSubscribe(ProfileSubscribe profileSubscribe) {
		this.profileSubscribe = profileSubscribe;
	}


	public List<ProfileRegion> getRegions() {
		return regions;
	}

	public void setRegions(List<ProfileRegion> regions) {
		this.regions = regions;
	}

	@Override
	public String toString() {
		return "Profile [id=" + id + ", regions=" + regions + ", tariffs=" + tariffs + ", profileDetails="
				+ profileDetails + ", profileSubscribe=" + profileSubscribe + ", confirmed=" + confirmed + ", blocked="
				+ blocked + "]";
	}



}
