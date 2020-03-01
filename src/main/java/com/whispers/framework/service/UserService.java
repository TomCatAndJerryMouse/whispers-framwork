package com.whispers.framework.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whispers.framework.common.utils.HashTool;
import com.whispers.framework.dao.UserDao;
import com.whispers.framework.entity.User;
import com.whispers.framework.response.WhispersResponse;

/**
 * 服务层
 */
@Service("userService")
public class UserService
{
	@Autowired
	private UserDao userDao;
	/**
	 * 登录校验
	 * @param user
	 * @return
	 */
	public boolean checkLogin(User user)
	{
		System.out.println("checkLogin");
		User newUser = userDao.getUser(user);
		if (null != newUser && newUser.getUsername().equals(user.getUsername()) && newUser.getPassword().equals(user.getPassword()))
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
	
	/**
	 * 注册
	 */
	public WhispersResponse regist(User user) {
		String pwd = String.valueOf(user.getPassword());
		String salt = HashTool.getSalt();
		HashTool ht = new HashTool(pwd,HashTool.SHA1,salt);
		user.setPassword(ht.digest().toCharArray());
		user.setSalt(salt);
		return userDao.insertUser(user);
	}
}

