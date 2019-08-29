package com.whispers.framework.controler;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whispers.framework.entity.User;
import com.whispers.framework.response.ResponseEnum;
import com.whispers.framework.response.WhispersResponse;



/**
 * 基础控制器
 * ResponseBody是作用在方法上的，@ResponseBody 表示该方法的返回结果直接写入 HTTP response body 中
 * ，一般在异步获取数据时使用【也就是AJAX】，在使用 @RequestMapping后，返回值通常解析为跳转路径，但是加上 @ResponseBody
 *  后返回结果不会被解析为跳转路径，而是直接写入 HTTP response body 中。 比如异步获取 json 数据，加上 @ResponseBody 
 *  后，会直接返回 json 数据。@RequestBody 将 HTTP 请求正文插入方法中，使用适合的 HttpMessageConverter 
 *  将请求体写入某个对象。
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value="/rest/")
public class BaseControler
{
	@RequestMapping(value="/validate")
	@ResponseBody
	public WhispersResponse validate(HttpServletRequest request, HttpServletResponse response)
	{
		Subject sb = SecurityUtils.getSubject();
		List<User> userList = new ArrayList<User>();
//		User user = (User)sb.getPrincipal();
//		userList.add(user);
		if (sb.isAuthenticated())
		{
			System.out.println("validate is OK.");
			return new WhispersResponse(ResponseEnum.LOGINSUCCESS,userList);
        }
		else
		{
			System.out.println("validate LOGINFILAD.");
        	return new WhispersResponse(ResponseEnum.LOGINFILAD,null);
        }
	}
}

