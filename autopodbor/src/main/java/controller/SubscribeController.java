package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Subscribe;
import service.SubscribeService;

@RestController
@RequestMapping("/subscribe")
public class SubscribeController {

	@Autowired
	SubscribeService service;

	@GetMapping("/all")
	public ResponseEntity<List<Subscribe>> getSubscribes() {

		Iterable<Subscribe> subscribe = service.getAll();
		List<Subscribe> subscribes = new ArrayList<>();
		for (Subscribe subs : subscribe) {
			subscribes.add(subs);
		}

		if (subscribes.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(subscribes);
		}
	}

	@PostMapping("/add")
	public boolean addSubscribe(@RequestBody Subscribe subscribe) {
		return service.create(subscribe) ? true : false;
	}

}
