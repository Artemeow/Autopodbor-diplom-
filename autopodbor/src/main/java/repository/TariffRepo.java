package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.Tariff;

@Repository
public interface TariffRepo extends CrudRepository<Tariff, Long> {

}
