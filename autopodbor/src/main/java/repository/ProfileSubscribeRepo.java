package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.ProfileSubscribe;

@Repository
public interface ProfileSubscribeRepo extends CrudRepository<ProfileSubscribe, Long>{

}
