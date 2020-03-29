package com.whispers.framework.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whispers.framework.common.utils.HashTool;
import com.whispers.framework.dao.UserDao;
import com.whispers.framework.entity.User;
import com.whispers.framework.response.WhispersResponse;
import com.whispers.framework.service.UserService;

/**
 * 服务层
 */
@Service("userService")
public class UserServiceImpl implements UserService
{
	@Autowired
	private UserDao userDao;
	/**
	 * 获取用户
	 * @param user
	 * @return
	 */
	public User getUserByUserName(String username)
	{
		System.out.println("getUser service.");
		return userDao.getUserByUserName(username);
	}
	
	/**
	 * 注册
	 */
	public WhispersResponse regist(User user) {
		String pwd = String.valueOf(user.getPassword());
		String salt = HashTool.getSalt();
		HashTool ht = new HashTool(pwd,HashTool.SHA1,salt);
		user.setPassword(ht.digest());
		user.setSalt(salt);
		return userDao.insertUser(user);
	}
}

