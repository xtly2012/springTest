package com.chen.repeatuse;

import org.springframework.beans.BeanUtils;

public class BeanUtilsTest {
	
	public static void main(String[] argus) {
		
		TestBean source = new TestBean();
		source.setOrderStatus(OrderStatus.CREATED);
		TestBean target = new TestBean();
		
		BeanUtils.copyProperties(source, target);
		System.out.println(target.getOrderStatus());
	}
}

class TestBean {
	private OrderStatus orderStatus;

	public OrderStatus getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}
	
}

enum OrderStatus {
	CREATED(0,"订单创建"), CONFIRMED(1, "确认");
	
	private int value;
	
	private String name;
	
	private OrderStatus(int value, String name) {
		this.value = value;
		this.name = name;
	}

	public int getValue() {
		return value;
	}

	public String getName() {
		return name;
	}
	
}
