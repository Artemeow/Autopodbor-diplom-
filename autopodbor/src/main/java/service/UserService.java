package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dto.AuthDto;
import model.Profile;
import model.User;
import repository.ProfileRepo;
import repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;

	@Autowired
	ProfileRepo profileRepo;

	@Transactional
	public User add(User user) {
		return userRepo.save(user);
	}

	@Transactional
	public Optional<User> auth(AuthDto auth) {
		Optional<User> user = userRepo.findByEmail(auth.getEmail());
		if (user.isPresent()) {
			if (user.get().getPassword().equals(auth.getPassword()))
				return user;
		} else
			return Optional.empty();
		return Optional.empty();
	}

	@Transactional
	public Optional<User> getUser(long id) {
		return userRepo.findById(id);
	}

	public boolean userWithThatNicknameExists(String nickname) {
		Optional<User> user = userRepo.findByNickname(nickname);
		return user.isPresent() ? true : false;
	}

	public boolean userWithThatEmailExists(String email) {
		Optional<User> user = userRepo.findByEmail(email);
		return user.isPresent() ? true : false;
	}

	@Transactional
	public boolean addProfile(long id, Profile profile) {
		Optional<User> userFromDb = getUser(id);
		if (userFromDb.isPresent()) {
			Optional<Profile> profileFromDb = profileRepo.findById(profile.getId());
			if (profileFromDb.isPresent()) {
				userFromDb.get().setProfile(profileFromDb.get());
				userRepo.save(userFromDb.get());
				return true;
			}
		}
		return false;
	}

}
