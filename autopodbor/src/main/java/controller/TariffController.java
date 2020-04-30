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

import dto.TariffDto;
import mapper.TariffMapper;
import model.Tariff;
import service.TariffService;

@RestController
@RequestMapping("/tariff")
public class TariffController {

	@Autowired
	TariffService tariffService;

	@Autowired
	TariffMapper mapper;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<TariffDto> getTariff(@PathVariable long id) {

		Optional<Tariff> tariff = tariffService.getTariff(id);
		if(tariff.isPresent()) {
			return ResponseEntity.ok(mapper.toDto(tariff.get()));
		} else {
			return ResponseEntity.ok(mapper.toDto(new Tariff())); //notFound().build();
		}
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<TariffDto>> getAllTariffs() {
		Iterable<Tariff> tariff = tariffService.getAll();
		List<TariffDto> tariffs = new ArrayList<>();
		for (Tariff item : tariff) {
			tariffs.add(mapper.toDto(item));
		}

		if (tariffs.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(tariffs);
		}
	}
	
	@PostMapping("/add")
	public boolean addTariff(@RequestBody TariffDto tariff) {
		return tariffService.create(mapper.toEntity(tariff)) ? true : false;
	}
}
