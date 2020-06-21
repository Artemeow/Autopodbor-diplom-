package service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.Profile;
import model.Tariff;
import repository.ProfileDetailsRepo;
import repository.ProfileRegionRepo;
import repository.ProfileRepo;
import repository.TariffRepo;

@Service
public class ProfileService {

	@Autowired
	ProfileRepo profileRepo;

	@Autowired
	ProfileDetailsRepo detailsRepo;

	@Autowired
	TariffRepo tariffRepo;

	@Autowired
	ProfileRegionRepo regionRepo;

	@Autowired
	ProfileSubscribeService profileSubscribeService;
	
	@Transactional
	public Profile create(Profile profile) {
		profile.setProfileDetails(detailsRepo.save(profile.getProfileDetails()));
		profile.setTariffs((List<Tariff>) (tariffRepo.saveAll(profile.getTariffs())));
		profile.setProfileSubscribe(profileSubscribeService.create(profile.getProfileSubscribe()));
		
		return profileRepo.save(profile);
	}

	@Transactional
	public Iterable<Profile> getAll() {
		return profileRepo.findAll();
	}

	@Transactional
	public Optional<Profile> getProfile(Long id) {
		return profileRepo.findById(id);
	}

	public void handleCheck() {

	}
}
