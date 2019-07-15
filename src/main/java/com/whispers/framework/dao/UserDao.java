package com.whispers.framework.dao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.whispers.framework.entity.User;

/**
 * 鎸佷箙灞�
 */
@Repository("userDao")
public class UserDao
{
	@Autowired
	public JdbcTemplate jdbcTemplate;
	
	public User getUser(User user)
	{
		System.out.println("begin query username = " + user.getUsername());
		String sql = "SELECT * FROM user WHERE username = ?";
		User newUser = null;
		try
		{
			newUser = jdbcTemplate.queryForObject(sql, new Object[] {user.getUsername()}, new BeanPropertyRowMapper<User>(User.class));
		}
        catch(EmptyResultDataAccessException e)
		{
        	System.out.println("EmptyResultDataAccessException " + e);
        	return newUser;
        	
		}
		System.out.println("getUser Success username = " + newUser.getUsername());
		return newUser;
	}
}

