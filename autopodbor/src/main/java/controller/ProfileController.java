package controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dto.ProfileDto;
import mapper.ProfileMapper;
import model.Profile;
import service.ProfileService;

@CrossOrigin
@RestController
@RequestMapping("/profile")
public class ProfileController {

	@Autowired
	ProfileService profileService;

	@Autowired
	ProfileMapper mapper;

	@Transactional
	@GetMapping(value = "/{id}")
	public ResponseEntity<ProfileDto> getProfile(@PathVariable long id) {

		Optional<Profile> profile = profileService.getProfile(id);
		if (profile.isPresent()) {
			ProfileDto dto = mapper.toDto(profile.get());
			return ResponseEntity.ok(dto);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping("/add")
	public ResponseEntity<Profile> addProfile(@RequestBody Profile profile) {
		Profile profileWithId = profileService.create(profile);
		return ResponseEntity.ok(profileWithId);
	}
}
