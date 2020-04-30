package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.Subscribe;
import repository.SubscribeRepo;

@Service
public class SubscribeService {

	@Autowired
	SubscribeRepo repository;
	
	@Transactional
	public boolean create(Subscribe subscribe) {
		return repository.save(subscribe).equals(subscribe)? true : false;
	}
	
	@Transactional
	public Iterable<Subscribe> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<Subscribe> getSubscribe(Long id) {
		return repository.findById(id);
	}

}
