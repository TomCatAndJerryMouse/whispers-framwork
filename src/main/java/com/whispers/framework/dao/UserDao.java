package com.whispers.framework.dao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import com.whispers.framework.entity.User;
import com.whispers.framework.response.WhispersResponse;
public interface UserDao
{
	/**
	 * 获取用户信息查询sql
	 */
	String getuserSql = "SELECT * FROM user WHERE username = ?";
	/**
	 * 添加用户sql
	 */
	String insertUser = "INSERT INTO user(username,password,salt) VALUES (?,?,?)";
	
	
	public User getUserByUserName(String username);
	 
	public WhispersResponse insertUser(User user);
}

