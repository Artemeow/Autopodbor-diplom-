package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.Subscribe;

@Repository
public interface SubscribeRepo extends CrudRepository<Subscribe, Long> {

}
