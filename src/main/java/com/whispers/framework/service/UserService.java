package com.whispers.framework.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whispers.framework.dao.UserDao;
import com.whispers.framework.entity.User;

/**
 * 服务层
 */
@Service("userService")
public class UserService
{
	@Autowired
	private UserDao userDao;
	public boolean checkLogin(User user)
	{
		System.out.println("checkLogin");
		User newUser = userDao.getUser(user);
		if (null != newUser && newUser.getUsername().equals(user.getUsername()) && newUser.getPwd().equals(user.getPwd()))
		{
			System.out.println("dao success");
			return true;
		}
		else
		{
			System.out.println("dao failt!");
			return false;
		}
	}
}

