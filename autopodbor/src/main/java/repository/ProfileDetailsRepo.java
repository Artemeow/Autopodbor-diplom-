package repository;

import org.springframework.data.repository.CrudRepository;

import model.ProfileDetails;

public interface ProfileDetailsRepo extends CrudRepository<ProfileDetails, Long> {

}
