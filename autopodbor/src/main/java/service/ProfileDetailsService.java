package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.ProfileDetails;
import repository.ProfileDetailsRepo;

@Service
public class ProfileDetailsService {

	@Autowired
	ProfileDetailsRepo repository;
	
	@Transactional
	public boolean create(ProfileDetails profileDetails) {
		return repository.save(profileDetails).equals(profileDetails)? true : false;
	}
	
	@Transactional
	public Iterable<ProfileDetails> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<ProfileDetails> getProfileDetails(Long id) {
		return repository.findById(id);
	}

}
