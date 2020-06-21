package dto;

import org.springframework.stereotype.Component;

@Component
public class UserDto {

	private long id;
	private String nickname;
	private ProfileDto profile;

	public UserDto() {
	}

	public UserDto(long id, String nickname, ProfileDto profile) {
		this.id = id;
		this.nickname = nickname;
		this.profile = profile;
	}

	public ProfileDto getProfile() {
		return profile;
	}

	public void setProfile(ProfileDto profile) {
		this.profile = profile;
	}

	public long getId() {
		return id;
	}

	public String getNickname() {
		return nickname;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

}
