package com.chen.transaction;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.chen.domain.TransactionTest;
import com.chen.service.TransactionTestService;

public class SpringTransactionTest {
	
	public static void main(String[] argus) {
		ApplicationContext appContext = new ClassPathXmlApplicationContext("AppContext.xml");
		TransactionTestService service = (TransactionTestService)appContext.getBean(TransactionTestService.class);
		try {
			TransactionTest record = new TransactionTest();
			record.setIden(123456L);
			record.setText("测试");
			service.addTransactionTest(record);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
