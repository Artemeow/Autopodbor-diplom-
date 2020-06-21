package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Comment;
import service.CommentService;

@CrossOrigin
@RestController
@RequestMapping("/comment")
public class CommentController {

	@Autowired
	CommentService service;

	@GetMapping("/all")
	public ResponseEntity<List<Comment>> getComments() {

		Iterable<Comment> comment = service.getAll();
		List<Comment> comments = new ArrayList<>();
		for (Comment item : comment) {
			comments.add(item);
		}

		if (comments.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(comments);
		}
	}
}
