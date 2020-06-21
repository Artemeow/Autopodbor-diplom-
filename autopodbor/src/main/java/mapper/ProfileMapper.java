package mapper;

import org.springframework.stereotype.Component;

import dto.ProfileDto;
import model.Profile;

@Component
public class ProfileMapper extends AbstractMapper<Profile, ProfileDto> {

	public ProfileMapper() {
		super(Profile.class, ProfileDto.class);
	}
}
