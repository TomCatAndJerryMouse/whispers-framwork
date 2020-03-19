package com.whispers.framework.controler;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whispers.framework.entity.User;
import com.whispers.framework.response.ResponseConstant;
import com.whispers.framework.response.ResponseEnum;
import com.whispers.framework.response.WhispersResponse;
import com.whispers.framework.service.UserService;
/**
 * 控制层
 */
@Controller
@RequestMapping(value="/rest/user")
public class UserControler {
	@Autowired
	private UserService userService;
	
	/**
	 * 注册用户
	 * @param user 用户对象
	 * @param resp 响应
	 * @return
	 */
	@RequestMapping(value="/regist",method = RequestMethod.POST)
	@ResponseBody
	public WhispersResponse register(@RequestBody User user,HttpServletResponse resp) {
		return userService.regist(user);
	}
	
	/**
	 * 登录
	 * @param user 用户对象
	 * @param resp 响应
	 * @return
	 */
	@RequestMapping(value = "/login",method = RequestMethod.POST)
	@ResponseBody
	public WhispersResponse login(@RequestBody User user,HttpServletResponse resp){
		UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(),user.getPassword());
		Subject subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
        } catch (IncorrectCredentialsException ice) {
            // 捕获密码错误异常
        	System.out.println("IncorrectCredentialsException login failt!");
        	return new WhispersResponse(resp,ResponseEnum.LOGINFILAD,null);
        } catch (UnknownAccountException uae) {
            // 捕获未知用户名异常
        	System.out.println("UnknownAccountException login failt!");
        	return new WhispersResponse(ResponseEnum.LOGINFILAD,null);
        } catch (ExcessiveAttemptsException e) {
	        // 捕获错误登录过多的异常
	    	System.out.println("ExcessiveAttemptsException login failt!");
	    	return new WhispersResponse(ResponseEnum.LOGINFILAD,null);
		} catch (AuthenticationException uae) {
        	// 用户不存在
        	System.out.println("AuthenticationException login failt!");
        	return new WhispersResponse(resp,ResponseEnum.LOGINFILAD,null);
        }
		System.out.println("login success");
		return new WhispersResponse(ResponseEnum.LOGINSUCCESS,null);
	}
	/**
	 * 获取用户信息
	 */
	@RequestMapping(value = "/info",method = RequestMethod.GET)
	@ResponseBody
	public WhispersResponse getUserInfo(HttpServletResponse resp) {
		Subject sb = SecurityUtils.getSubject();
		if (sb.isAuthenticated())
		{
			Map<String,User> datas = new HashMap<String,User>();
			User user = (User)sb.getPrincipal();
			datas.put(ResponseConstant.CONTAIN, user);
			System.out.println("Get userInfo success.");
			return new WhispersResponse(ResponseEnum.GET_USER_INFO_SUCCESS,datas);
        }
		else
		{
			System.out.println("Get userInfo filad.");
        	return new WhispersResponse(resp,ResponseEnum.GET_USER_INFO_FILAD,null);
        }
	}
	/**
	 * 注销用户
	 * @param user 用户对象
	 * @param resp 响应
	 * @return
	 */
	@RequestMapping(value="/logout",method = RequestMethod.POST)
	@ResponseBody
	public WhispersResponse logout(@RequestBody User user,HttpServletResponse resp) {
		SecurityUtils.getSubject().logout();
		return new WhispersResponse(ResponseEnum.LOGOUTSUCCESS,null);
	}
}
