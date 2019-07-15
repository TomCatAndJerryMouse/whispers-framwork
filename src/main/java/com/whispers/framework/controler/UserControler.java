package com.whispers.framework.controler;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.whispers.framework.entity.User;
import com.whispers.framework.service.UserService;
/**
 * 控制层
 */
@Controller
@RequestMapping(value="/user")
public class UserControler{
	@Autowired
	private UserService userService;
	@RequestMapping(value="/login")
	public void login1(@RequestBody User user,HttpServletResponse resp)
	{
		System.out.println("User = " + user.toString());
		boolean ret =  userService.checkLogin(user);
		if (ret)
		{
			System.out.println("login success");
			resp.setStatus(200);
		}
		else
		{
			System.out.println("login failt!");
			resp.setStatus(500);
		}
	}
}
