package com.whispers.framework.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.whispers.framework.dao.UserDao;
import com.whispers.framework.entity.User;
import com.whispers.framework.response.ResponseEnum;
import com.whispers.framework.response.WhispersResponse;

/**
 * 鎸佷箙灞�
 */
@Repository("userDao")
public class UserDaoImpl implements UserDao
{
	@Autowired
	public JdbcTemplate jdbcTemplate;
	
	public User getUserByUserName(String username)
	{
		System.out.println("begin query user by username + " + username + " +from db. ");
		User newUser = null;
		newUser = jdbcTemplate.queryForObject(getuserSql, new Object[] {username}, new BeanPropertyRowMapper<User>(User.class));
		System.out.println("begin query user by username end.");
		return newUser;
	}
	 
	public WhispersResponse insertUser(User user) {
		jdbcTemplate.update(insertUser,new Object[]{user.getUsername(),String.valueOf(user.getPassword()),user.getSalt()});
		return new WhispersResponse(ResponseEnum.REGISTSUCCESS,null);
	}
}

