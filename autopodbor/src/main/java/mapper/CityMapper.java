package mapper;

import org.springframework.stereotype.Component;

import dto.CityDto;
import model.City;

@Component
public class CityMapper extends AbstractMapper<City, CityDto>{
	
	public CityMapper() {
		super(City.class, CityDto.class);
	}

}
