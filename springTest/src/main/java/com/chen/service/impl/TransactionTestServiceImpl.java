package com.chen.service.impl;

import com.chen.dao.TransactionTestDAO;
import com.chen.domain.TransactionTest;
import com.chen.service.TransactionTestService;

public class TransactionTestServiceImpl implements TransactionTestService {

	private TransactionTestDAO transDAO;
	
	@Override
    public void addTransactionTest(TransactionTest record) throws Exception {
		//	this.transDAO.testExcepiton();
		this.transDAO.saveTransactionTest(record);
	}

	public void setTransDAO(TransactionTestDAO transDAO) {
		this.transDAO = transDAO;
	}
	
}
