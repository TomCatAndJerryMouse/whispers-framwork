package com.whispers.framework.controler;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whispers.framework.entity.User;
import com.whispers.framework.response.ResponseEnum;
import com.whispers.framework.response.WhispersResponse;
import com.whispers.framework.service.UserService;
/**
 * 控制层
 */
@Controller
@RequestMapping(value="/rest/user")
public class UserControler{
	@Autowired
	private UserService userService;
	@RequestMapping(value="/login")
	@ResponseBody
	public WhispersResponse login(@RequestBody User user,HttpServletResponse resp)
	{
		System.out.println("User = " + user.toString());
		boolean ret =  userService.checkLogin(user);
		if (ret)
		{
			System.out.println("login success");
			return new WhispersResponse(ResponseEnum.LOGINSUCCESS,null);
		}
		else
		{
			System.out.println("login failt!");
			return new WhispersResponse(ResponseEnum.LOGINFILAD,null);
		}
	}
}
