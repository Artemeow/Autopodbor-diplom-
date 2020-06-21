package dto;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class RegionDto {

	private long id;
	private String value;
	private List<CityDto> data;

	public RegionDto() {
	}

	public RegionDto(long id, String value, List<CityDto> data) {
		this.id = id;
		this.value = value;
		this.data = data;
	}

	public long getId() {
		return id;
	}

	public List<CityDto> getData() {
		return data;
	}

	public void setData(List<CityDto> data) {
		this.data = data;
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

}
