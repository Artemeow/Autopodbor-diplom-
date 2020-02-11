package mapper;

import org.springframework.stereotype.Component;

import dto.UserDto;
import model.User;

@Component
public class UserMapper extends AbstractMapper<User, UserDto> {

	public UserMapper() {
		super(User.class, UserDto.class);
	}	
	
}
