package controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dto.UserDto;
import mapper.UserMapper;
import model.Profile;
import model.User;
import service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService service;

	@Autowired
	UserMapper mapper;

	@PostMapping("/add")
	public ResponseEntity<UserDto> addUser(@RequestBody User user) {
		return ResponseEntity.ok(mapper.toDto(service.add(user)));
	}

	@GetMapping("/check/nickname")
	public ResponseEntity<String> checkNickname(@RequestParam String nickname) {
		return service.userWithThatNicknameExists(nickname) ? ResponseEntity.status(HttpStatus.CONFLICT).build()
				: ResponseEntity.ok().build();
	}

	@GetMapping("/check/email")
	public ResponseEntity<String> checkEmail(@RequestParam String email) {
		return service.userWithThatEmailExists(email) ? ResponseEntity.status(HttpStatus.CONFLICT).build()
				: ResponseEntity.ok().build();
	}

	@PostMapping("/{id}/profile/add")
	public ResponseEntity<String> addProfileToUser(@PathVariable long id, @RequestBody Profile profile) {
		return service.addProfile(id, profile) ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
	}

	@Transactional
	@GetMapping("/{id}")
	public ResponseEntity<UserDto> getUser(@PathVariable long id) {
		Optional<User> user = service.getUser(id);
		return user.isPresent() ? ResponseEntity.ok(mapper.toDto(user.get())) : ResponseEntity.notFound().build();
	}
}
