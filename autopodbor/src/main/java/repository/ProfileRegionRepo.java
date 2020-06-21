package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.ProfileRegion;

@Repository
public interface ProfileRegionRepo extends CrudRepository<ProfileRegion, Long> {

}
