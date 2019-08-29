package com.whispers.framework.controler;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
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
		UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(),user.getPwd());
		Subject subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
        } catch (IncorrectCredentialsException ice) {
            // 捕获密码错误异常
        	System.out.println("login failt!");
        	return new WhispersResponse(ResponseEnum.LOGINFILAD,null);
        } catch (UnknownAccountException uae) {
            // 捕获未知用户名异常
        	System.out.println("login failt!");
        	return new WhispersResponse(ResponseEnum.LOGINFILAD,null);
        } catch (ExcessiveAttemptsException eae) {
            // 捕获错误登录过多的异常
        	System.out.println("login failt!");
        	return new WhispersResponse(ResponseEnum.LOGINFILAD,null);
        }
			System.out.println("login success");
			return new WhispersResponse(ResponseEnum.LOGINSUCCESS,null);
	}
}
