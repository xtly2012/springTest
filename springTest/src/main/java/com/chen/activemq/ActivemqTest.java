package com.chen.activemq;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ActivemqTest {
	
	public static void main(String[] argus) {
		
		ApplicationContext appContext = new ClassPathXmlApplicationContext(
		        "AppContext.xml");
		ActivemqSender sender = (ActivemqSender) appContext
		        .getBean(ActivemqSender.class);
		try {
			for (int i = 0; i < 100; i++) {
				sender.send("test");
				System.out.println("test");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
