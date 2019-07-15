package com.whispers.framework.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ValidataFilter implements Filter{

	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	public void doFilter(ServletRequest servletrequest, ServletResponse servletresponse, FilterChain filterchain)
			throws IOException, ServletException {
		System.out.println(Thread.currentThread().getName() + "  " + "ValidataFilter url is requered");
		
		//获取session
		HttpServletRequest httpRequest = (HttpServletRequest)servletrequest;
		//获取session
		HttpServletResponse httpResponse = (HttpServletResponse)servletresponse;
//		InputStream requestBodyInput = httpRequest.getInputStream();
//        int readByte;
//        StringBuilder stringBuilder = new StringBuilder();
//        byte[] b = new byte[1024];
//        while ((readByte = requestBodyInput.read(b)) > 0)
//        {
//            stringBuilder.append(new String(b, 0, readByte));
//        }
//		System.out.println("username" + stringBuilder.toString());
		System.out.println(Thread.currentThread().getName() + "  " + httpRequest.getHeader("Referer"));
		//重定向
		httpResponse.sendRedirect(httpRequest.getHeader("Referer")+ "ui/css/bootstrap.min.css");
		//转发
//		httpResponse.
		//打印seesionid
		filterchain.doFilter(servletrequest, servletresponse);
		System.out.println("BBBBBBBBBBBBBBBBBBBBB");

	}

	public void init(FilterConfig arg0) throws ServletException {
		System.out.println("ValidataFilter is loaded.");
		
	}
	
}
