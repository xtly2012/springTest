package com.chen.dao.impl;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.chen.dao.TransactionTestDAO;
import com.chen.domain.TransactionTest;

public class TransactionTestDAOImpl extends SqlMapClientDaoSupport implements TransactionTestDAO {

	@Override
    public void saveTransactionTest(TransactionTest record)  throws Exception {
	    this.getSqlMapClientTemplate().insert("com.chen.dao.TransactionDAO.saveTransaction", record);
    }

	@Override
    public void testExcepiton() throws Exception {
		throw new RuntimeException();
    }
	
}
