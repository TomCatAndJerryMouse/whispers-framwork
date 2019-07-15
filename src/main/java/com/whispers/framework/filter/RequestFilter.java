package com.whispers.framework.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class RequestFilter implements Filter{

	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	public void doFilter(ServletRequest servletrequest, ServletResponse ServletResponse, FilterChain filterchain)
			throws IOException, ServletException {
		System.out.println(Thread.currentThread().getName() + "  " + "RequestFilter url is requered");
		
		//获取session
		HttpServletRequest httpRequest = (HttpServletRequest)servletrequest;
		
		HttpSession  session = httpRequest.getSession();
		//打印seesionid
		System.out.println(Thread.currentThread().getName() + "  "  + session.getId());
		System.out.println(Thread.currentThread().getName() + "  "  + httpRequest.getRequestURI());
		System.out.println(Thread.currentThread().getName() + "  "  + "");
		filterchain.doFilter(servletrequest, ServletResponse);
		System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAA");
	}

	public void init(FilterConfig arg0) throws ServletException {
		System.out.println("RequestFilter is loaded.");
		
	}
	
}
