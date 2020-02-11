package model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "user_t")
public class User {
	private long id;
	private String firstname;
	private String lastname;
	private String nickname;
	private String password;
	private List<Service> services;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	
	@OneToMany(mappedBy = "user", orphanRemoval = true, fetch = FetchType.LAZY)
	public List<Service> getServices() {
		return services;
	}
}
