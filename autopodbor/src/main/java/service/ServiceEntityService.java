package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import repository.ServiceRepository;

@Service
public class ServiceEntityService {

	@Autowired
	ServiceRepository repository;
	
	@Transactional
	public boolean create(model.Service service) {
		return repository.save(service).equals(service)? true : false;
	}
	
	@Transactional
	public Iterable<model.Service> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<model.Service> getService(Long id) {
		return repository.findById(id);
	}
}
