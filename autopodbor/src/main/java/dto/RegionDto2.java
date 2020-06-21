package dto;

import org.springframework.stereotype.Component;

@Component
public class RegionDto2 {

	private long id;
	private String value;

	public long getId() {
		return id;
	}

	public RegionDto2() {
	}

	public RegionDto2(long id, String value) {
		this.id = id;
		this.value = value;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "RegionDto2 [id=" + id + ", value=" + value + "]";
	}

}
