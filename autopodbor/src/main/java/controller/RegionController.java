package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dto.RegionDto;
import mapper.RegionMapper;
import model.Region;
import service.RegionService;

@RestController
@RequestMapping("/region")
public class RegionController {
	
	@Autowired
	RegionService service;
	
	@GetMapping("/all")
	public ResponseEntity<List<RegionDto>> getAllRegions(){
		Iterable<Region> region = service.getAll();
		List<RegionDto> regions = new ArrayList<>();
		for (Region reg : region) {
			regions.add(RegionMapper.toDto(reg));
		}

		if (regions.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(regions);
		}
	}
}
