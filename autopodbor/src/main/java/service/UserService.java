package service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.User;
import repository.ServiceRepository;
import repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repository;
	
	@Transactional
	public boolean create(User user) {
		return repository.save(user).equals(user)? true : false;
	}
	
	@Transactional
	public Iterable<User> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<User> getUser(Long id) {
		return repository.findById(id);
	}
}

