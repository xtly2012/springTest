package com.chen.activemq;

import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import ch.qos.logback.classic.LoggerContext;
import ch.qos.logback.classic.joran.JoranConfigurator;
import ch.qos.logback.core.joran.spi.JoranException;
import ch.qos.logback.core.util.StatusPrinter;

public class ActivemqTest {
	
	static {
		LoggerContext lc = (LoggerContext)LoggerFactory.getILoggerFactory();
        JoranConfigurator configurator = new JoranConfigurator();
        configurator.setContext(lc);
        lc.reset();
        try {
            configurator.doConfigure("/Users/chenfayong/git/springTest/springTest/target/classes/logback.xml");
        } catch (JoranException e) {
            e.printStackTrace();
        }
        StatusPrinter.printInCaseOfErrorsOrWarnings(lc);
        System.out.println("===================");
	}
	
	public static void main(String[] argus) {		
		ApplicationContext appContext = new ClassPathXmlApplicationContext(
		        "AppContext.xml");
//		ActivemqSender sender = (ActivemqSender) appContext
//		        .getBean(ActivemqSender.class);
		
		JvmActivemqSender sender = (JvmActivemqSender) appContext.getBean(JvmActivemqSender.class);
		
		try {
			for (int i = 0; i < 10; i++) {
				sender.send("目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。目的地是客户用来指定它生产的消息的目标和它消费的消息的来源的对象。 JMS1.0.2 规范中定义了两种消息传递域:点对点 (PTP)消息传递域和发布/订阅 消息传递域。");
				System.out.println("test");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
