package controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

	@PostMapping("/add")
	public boolean addCity(@RequestBody City city) {
		return service.create(city) ? true : false;
	}
}
