package model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "comment_t")
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	private String content;
	private String name;
	@OneToOne
	private Profile profile;
	@OneToOne
	private Comment parentComment;

	public long getId() {
		return id;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public String getContent() {
		return content;
	}

	public String getName() {
		return name;
	}

	public Profile getProfile() {
		return profile;
	}

	public Comment getParentComment() {
		return parentComment;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
	}

	public void setParentComment(Comment parentComment) {
		this.parentComment = parentComment;
	}

	public Comment() {
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", createdAt=" + createdAt + ", content=" + content + ", name=" + name
				+ ", profile=" + profile + ", parentComment=" + parentComment + "]";
	}

}
