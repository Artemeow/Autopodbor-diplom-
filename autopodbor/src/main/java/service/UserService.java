package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.User;
import repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo repository;
	
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
