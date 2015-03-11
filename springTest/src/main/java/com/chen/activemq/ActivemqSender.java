package com.chen.activemq;


import java.io.Serializable;

import javax.jms.Destination;

import org.springframework.jms.core.JmsTemplate;

public class ActivemqSender {
	private JmsTemplate jmsTemplate;
    private Destination destination;

    public void setJmsTemplate(JmsTemplate jmsTemplate) {
        this.jmsTemplate = jmsTemplate;
    }

    public JmsTemplate getJmsTemplate() {
        return jmsTemplate;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }
    
    public void send(Serializable objMessage) throws Exception {
        try {
            getJmsTemplate().convertAndSend(getDestination(), objMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
   
}
