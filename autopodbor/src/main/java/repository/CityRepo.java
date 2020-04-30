package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.City;

@Repository
public interface CityRepo extends CrudRepository<City, Long> {

}
