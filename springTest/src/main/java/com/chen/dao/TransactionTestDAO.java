package com.chen.dao;

import com.chen.domain.TransactionTest;

public interface TransactionTestDAO {
	
	void testExcepiton() throws Exception;
	
	void saveTransactionTest(TransactionTest record) throws Exception;
}
