package service;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import model.ProfileSubscribe;
import repository.ProfileSubscribeRepo;

@Service
public class ProfileSubscribeService {

	@Autowired
	ProfileSubscribeRepo repository;

	@Transactional
	public ProfileSubscribe create(ProfileSubscribe subscribe) {
		int days = subscribe.getSubscribe().getDays();
//подтянуть с базы subscribe и там будет заполненное поле days
		Calendar calendar = new GregorianCalendar();
		subscribe.setCreatedAt(calendar.getTime());
		calendar.add(Calendar.DAY_OF_MONTH, days);
		subscribe.setEndedAt(calendar.getTime());

		return repository.save(subscribe);
	}

	@Transactional
	public Iterable<ProfileSubscribe> getAll() {
		return repository.findAll();
	}

	@Transactional
	public Optional<ProfileSubscribe> getProfile(Long id) {
		return repository.findById(id);
	}
}
