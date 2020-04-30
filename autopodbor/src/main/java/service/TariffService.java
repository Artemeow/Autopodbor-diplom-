package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.Tariff;
import repository.TariffRepo;

@Service
public class TariffService {

	@Autowired
	TariffRepo repository;
	
	@Transactional
	public boolean create(Tariff tariff) {
		return repository.save(tariff).equals(tariff)? true : false;
	}
	
	@Transactional
	public Iterable<Tariff> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<Tariff> getTariff(Long id) {
		return repository.findById(id);
	}

}
