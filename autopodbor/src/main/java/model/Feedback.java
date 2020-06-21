package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "feedback_t")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String topic;
	private String content;
	@OneToOne
	private Profile profile;

	public long getId() {
		return id;
	}

	public String getTopic() {
		return topic;
	}

	public String getContent() {
		return content;
	}

	public Profile getProfile() {
		return profile;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
	}

	public Feedback() {
	}

}
