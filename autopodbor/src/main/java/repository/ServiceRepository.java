package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.Service;

@Repository
public interface ServiceRepository extends CrudRepository<Service, Long> {

}
