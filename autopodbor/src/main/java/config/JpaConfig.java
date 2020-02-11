package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories(basePackages = "repository")
@EnableTransactionManagement
public class JpaConfig {

	private static final String PERSISTENCE_UNIT_NAME = "autopodbor";
	
	@Bean
	public JpaVendorAdapter jpaVendorAdapter() {
		HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
	
		return adapter;
	}

	@Bean(name = "entityManagerFactory")
	public LocalContainerEntityManagerFactoryBean managerFactoryBean() {
		LocalContainerEntityManagerFactoryBean managerFactory = new LocalContainerEntityManagerFactoryBean();
		managerFactory.setJpaVendorAdapter(jpaVendorAdapter());
		managerFactory.setPersistenceUnitName(PERSISTENCE_UNIT_NAME);
		return managerFactory;
	}
	
	@Bean
	public PlatformTransactionManager transactionManager(){
	    JpaTransactionManager transactionManager = new JpaTransactionManager();
	    transactionManager.setEntityManagerFactory(managerFactoryBean().getObject());
	    return transactionManager;
	}
}
