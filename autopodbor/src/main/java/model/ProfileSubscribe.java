package model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "profile_subscribe_t")
public class ProfileSubscribe {

	@Id
	@GeneratedValue
	private long id;
	@OneToOne(fetch = FetchType.EAGER)
	private Subscribe subscribe;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateBegin;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateEnd;

	public ProfileSubscribe() {
	}

	public long getId() {
		return id;
	}

	public Subscribe getSubscribe() {
		return subscribe;
	}

	public Date getDateBegin() {
		return dateBegin;
	}

	public Date getDateEnd() {
		return dateEnd;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setSubscribe(Subscribe subscribe) {
		this.subscribe = subscribe;
	}

	public void setDateBegin(Date dateBegin) {
		this.dateBegin = dateBegin;
	}

	public void setDateEnd(Date dateEnd) {
		this.dateEnd = dateEnd;
	}

}
