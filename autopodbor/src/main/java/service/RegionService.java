package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.Region;
import repository.RegionRepo;

@Service
public class RegionService {
	
	@Autowired
	RegionRepo repository;
	
	@Transactional
	public boolean create(Region region) {
		return repository.save(region).equals(region)? true : false;
	}
	
	@Transactional
	public Iterable<Region> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<Region> getRegion(Long id) {
		return repository.findById(id);
	}

}
