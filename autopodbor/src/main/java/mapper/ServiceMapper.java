package mapper;

import org.springframework.stereotype.Component;

import dto.ServiceDto;
import model.Service;

@Component
public class ServiceMapper extends AbstractMapper<Service, ServiceDto> {

	public ServiceMapper() {
		super(Service.class, ServiceDto.class);
	}

}
