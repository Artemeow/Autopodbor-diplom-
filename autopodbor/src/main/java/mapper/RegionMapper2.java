package mapper;

import org.springframework.stereotype.Component;

import dto.RegionDto2;
import model.Region;

@Component
public class RegionMapper2 extends AbstractMapper<Region, RegionDto2> {

	public RegionMapper2() {
		super(Region.class, RegionDto2.class);
	}
}
