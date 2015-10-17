package com.chen.expand;

import org.flywaydb.core.Flyway;

public class App {
	public static void main(String[] args) {
		Flyway flyway = new Flyway();
		
		flyway.setDataSource("jdbc:mysql://localhost:3306/springtestDB?useUnicode=true&characterEncoding=utf-8", "springtest", "springtest");
		
		flyway.migrate();
	}
}
