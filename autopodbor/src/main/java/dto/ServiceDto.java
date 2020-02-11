package dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

import lombok.Builder;
import lombok.Data;
import model.Service;

@Data
public class ServiceDto {

	private long id;
	private String name;
}
