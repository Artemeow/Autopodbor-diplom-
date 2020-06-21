package service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.Comment;
import repository.CommentRepo;

@Service
public class CommentService {

	@Autowired
	CommentRepo repository;
	
	@Transactional
	public boolean create(Comment comment) {
		return repository.save(comment).equals(comment)? true : false;
	}
	
	@Transactional
	public Iterable<Comment> getAll() {
		return repository.findAll();
	}
	
	@Transactional
	public Optional<Comment> getComment(Long id) {
		return repository.findById(id);
	}

}
