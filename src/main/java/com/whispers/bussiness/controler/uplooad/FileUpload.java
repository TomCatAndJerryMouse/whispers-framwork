package com.whispers.bussiness.controler.uplooad;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.whispers.framework.response.WhispersResponse;

@Controller
@RequestMapping("/rest/upload")
public class FileUpload {
	
	@RequestMapping("/single")
	public WhispersResponse SingleFileUpload(HttpServletRequest request, HttpServletResponse response)
	{
		System.out.println("AAAAAAAAA     " + request);
		return null;
	}
}
