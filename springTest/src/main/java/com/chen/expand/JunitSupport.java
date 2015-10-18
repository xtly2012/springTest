package com.chen.expand;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.flywaydb.core.Flyway;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.transaction.TransactionConfiguration;

@ContextConfiguration(locations = {"classpath*:/AppContext.xml"})
@TransactionConfiguration(defaultRollback = true)
public class JunitSupport extends AbstractJUnit4SpringContextTests {
	
	@Autowired
	private DataSource dataSource; 
	
	@PostConstruct
	public void flywayInit() throws Exception {
		Flyway flyway = new Flyway();
		flyway.setDataSource(dataSource);	
		flyway.migrate();
	}
	
	@Test
	public void test() {
		System.out.print("adfasdf");
	}
}
