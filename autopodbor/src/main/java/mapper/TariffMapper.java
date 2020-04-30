package mapper;

import org.springframework.stereotype.Component;

import dto.TariffDto;
import model.Tariff;

@Component
public class TariffMapper extends AbstractMapper<Tariff, TariffDto>{
	
	public TariffMapper() {
		super(Tariff.class, TariffDto.class);
	}
}
