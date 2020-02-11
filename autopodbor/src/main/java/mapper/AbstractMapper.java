package mapper;

import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public abstract class AbstractMapper<E, D> {
	
	@Autowired
	ModelMapper mapper;
	
	private Class<E> entityClass;
	private Class<D> dtoClass;
	
	public AbstractMapper(Class<E> entityClass, Class<D> dtoClass) {
		super();
		this.entityClass = entityClass;
		this.dtoClass = dtoClass;
	}
	
	public E toEntity(D dto) {
		return Objects.isNull(dto) ? null : mapper.map(dto, entityClass);
	}
	
	public D toDto(E entity) {
		return Objects.isNull(entity) ? null : mapper.map(entity, dtoClass);
	}
	
	
	
}
