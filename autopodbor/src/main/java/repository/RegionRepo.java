package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.Region;

@Repository
public interface RegionRepo extends CrudRepository<Region, Long> {

}
