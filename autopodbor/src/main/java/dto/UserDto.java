package dto;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import model.Service;
import model.User;

@Data
public class UserDto {

//	public static class View{};
//	https://mkyong.com/java/jackson-jsonview-examples/
//	Для контрлля отображения полей для разных ролей
	
//	@JsonView({UserDto.class})
	private long id;
	private String firstname;
	private String lastname;
	private String nickname;
	private String password;
//	private List<ServiceDto> services;
	
}
