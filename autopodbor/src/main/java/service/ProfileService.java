package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.Profile;
import repository.ProfileRepo;

@Service
public class ProfileService {

	@Autowired
	ProfileRepo repository;
	
	@Transactional
	public boolean create(Profile profile) {
		return repository.save(profile).equals(profile)? true : false;
	}
	
	@Transactional
	public Iterable<Profile> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<Profile> getProfile(Long id) {
		return repository.findById(id);
	}

}
