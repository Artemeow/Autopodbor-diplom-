package mapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import dto.CityDto;
import dto.RegionDto;
import model.City;
import model.Region;

@Component
public class RegionMapper {

	public static Region toEntity(RegionDto regionDto) {
        return new Region(
        );
    }

    public static RegionDto toDto(Region region) {
        return new RegionDto(
                region.getId(),
                region.getValue(),
                toDto(region.getCities(), region.getId())
        );
    }
    
    private static List<CityDto> toDto(List<City> listCity, Long regionId) {
    	List<CityDto> listCityDto = new ArrayList<>();
    	
    	for (City city : listCity) {
			CityDto dto = new CityDto();
			
			dto.setId(Long.toString(regionId) + "." + Long.toString(city.getId()));
			dto.setValue(city.getValue());
			
			listCityDto.add(dto);
		}
    	
    	return listCityDto;
    }
}
