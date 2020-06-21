package controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.City;
import service.CityService;

@RestController
@RequestMapping("/city")
public class CityController {

	@Autowired
	CityService service;

	@GetMapping("/{id}")
	public City getCity(@PathVariable long id) {

		Optional<City> city = service.getCity(id);

		if (city.isPresent())
			return city.get();
		else
			return new City();
	}

	@GetMapping("/all")
	public ResponseEntity<List<City>> getAllCitys() {
		Iterable<City> city = service.getAll();
		List<City> citys = new ArrayList<>();
		for (City item : city) {
			citys.add(item);
		}

		if (citys.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(citys);
		}
	}

	@PostMapping("/add")
	public boolean addCity(@RequestBody City city) {
		return service.create(city) ? true : false;
	}
}
