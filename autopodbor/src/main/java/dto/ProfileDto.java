package dto;

import java.util.List;

import org.springframework.stereotype.Component;

import model.ProfileDetails;
import model.ProfileSubscribe;
import model.Tariff;

@Component
public class ProfileDto {

	private long id;

	private List<ProfileRegionDto> regions;

	private List<Tariff> tariffs;

	private ProfileDetails profileDetails;

	private ProfileSubscribe profileSubscribe;

	private boolean confirmed;
	private boolean blocked;

	public long getId() {
		return id;
	}

	public List<Tariff> getTariffs() {
		return tariffs;
	}

	public ProfileDetails getProfileDetails() {
		return profileDetails;
	}

	public ProfileSubscribe getProfileSubscribe() {
		return profileSubscribe;
	}

	public boolean isConfirmed() {
		return confirmed;
	}

	public boolean isBlocked() {
		return blocked;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setTariffs(List<Tariff> tariffs) {
		this.tariffs = tariffs;
	}

	public void setProfileDetails(ProfileDetails profileDetails) {
		this.profileDetails = profileDetails;
	}

	public void setProfileSubscribe(ProfileSubscribe profileSubscribe) {
		this.profileSubscribe = profileSubscribe;
	}

	public List<ProfileRegionDto> getRegions() {
		return regions;
	}

	public void setRegions(List<ProfileRegionDto> regions) {
		this.regions = regions;
	}

	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}

	public void setBlocked(boolean blocked) {
		this.blocked = blocked;
	}

	@Override
	public String toString() {
		return "ProfileDto [id=" + id + ", regions=" + regions + ", tariffs=" + tariffs + ", profileDetails="
				+ profileDetails + ", profileSubscribe=" + profileSubscribe + ", confirmed=" + confirmed + ", blocked="
				+ blocked + "]";
	}

}
