package com.whispers.framework.service;

import com.whispers.framework.entity.User;
import com.whispers.framework.response.WhispersResponse;

public interface UserService {
	/**
	 * 获取用户
	 * @param user
	 * @return
	 */
	public User getUserByUserName(String username);
	
	/**
	 * 注册
	 */
	public WhispersResponse regist(User user);
}
