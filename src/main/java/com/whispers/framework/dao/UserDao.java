package com.whispers.framework.dao;


import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.whispers.framework.entity.User;
import com.whispers.framework.response.ResponseEnum;
import com.whispers.framework.response.WhispersResponse;

/**
 * 鎸佷箙灞�
 */
@Repository("userDao")
public class UserDao
{
	/**
	 * 获取用户信息查询sql
	 */
	String getuserSql = "SELECT * FROM user WHERE username = ?";
	/**
	 * 添加用户sql
	 */
	String insertUser = "INSERT INTO user(username,password,salt) VALUES (?,?,?)";
	
	@Autowired
	public JdbcTemplate jdbcTemplate;
	
	public User getUser(User user)
	{
		System.out.println("begin query username = " + user.getUsername());
		User newUser = null;
		try
		{
			newUser = jdbcTemplate.queryForObject(getuserSql, new Object[] {user.getUsername()}, new BeanPropertyRowMapper<User>(User.class));
		}
        catch(EmptyResultDataAccessException e)
		{
        	System.out.println("EmptyResultDataAccessException " + e);
        	return newUser;
        	
		}
		System.out.println("getUser Success username = " + newUser.getUsername());
		return newUser;
	}
	 
	public WhispersResponse insertUser(User user) {
		jdbcTemplate.update(insertUser,new Object[]{user.getUsername(),String.valueOf(user.getPassword()),user.getSalt()});
		return new WhispersResponse(ResponseEnum.REGISTSUCCESS,null);
	}
}

