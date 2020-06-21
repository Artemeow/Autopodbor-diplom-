package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.Comment;

@Repository
public interface CommentRepo extends CrudRepository<Comment, Long>{

}
