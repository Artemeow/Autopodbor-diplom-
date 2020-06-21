package authentication;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dto.AuthDto;
import dto.UserDto;
import mapper.UserMapper;
import model.User;
import service.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	UserService service;

	@Autowired
	UserMapper mapper;

	@Transactional
	@PostMapping
	public ResponseEntity<UserDto> authentication(@RequestBody AuthDto user) {
		Optional<User> auth = service.auth(user);
		if (auth.isPresent())
			return ResponseEntity.ok(mapper.toDto(auth.get()));
		else
			return ResponseEntity.notFound().build();
	}

}
