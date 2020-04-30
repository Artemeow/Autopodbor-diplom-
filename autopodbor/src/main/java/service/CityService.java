package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.City;
import repository.CityRepo;

@Service
public class CityService {

	@Autowired
	CityRepo repository;
	
	@Transactional
	public boolean create(City city) {
		return repository.save(city).equals(city)? true : false;
	}
	
	@Transactional
	public Iterable<City> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<City> getCity(Long id) {
		return repository.findById(id);
	}

}
