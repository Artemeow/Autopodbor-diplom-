package controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import dto.UserDto;
import mapper.UserMapper;
import model.User;
import service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserService service;
	
	@Autowired
	UserMapper mapper;
	
	@GetMapping("/{id}")
	@Transactional
	public ResponseEntity<UserDto> getUser(@PathVariable long id) {
		Optional<User> user = service.getUser(id);
		
		if(user.isPresent()) {
			return ResponseEntity.ok(mapper.toDto(user.get()));
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
//	@GetMapping

//	@GetMapping("/{id}")
//	public ResponseEntity<User> getUser(@PathVariable long id) {
//		Optional<User> user = service.getUser(id);
//		
//		if(user.isPresent()) {
//			return ResponseEntity.ok(user.get());
//		} else {
//			return ResponseEntity.notFound().build();
//		}
//	}
	
}
