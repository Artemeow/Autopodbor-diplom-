package controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Profile;
import service.ProfileService;

@CrossOrigin
@RestController
@RequestMapping("/profile")
public class ProfileController {

	@Autowired
	ProfileService profileService;

	@GetMapping(value = "/{id}")
	public ResponseEntity<Profile> getProfile(@PathVariable long id) {

		Optional<Profile> profile = profileService.getProfile(id);
		if(profile.isPresent()) {
			return ResponseEntity.ok(profile.get());
		} else {
			return ResponseEntity.ok(new Profile()); //notFound().build();
		}
	}
	
	@PostMapping("/add")
	public boolean addProfile(@RequestBody Profile profile) {
		return profileService.create(profile) ? true : false;
	}
}
