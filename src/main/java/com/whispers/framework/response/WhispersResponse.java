package com.whispers.framework.response;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

public class WhispersResponse {
	
	// 响应类型
	private int statusCode;
	// 响应类型
	private String type;
	// 状态码
	private String code;
	// 描述
	private String desc;
	// 响应数据
	private Map datas = new HashMap<>();
	
	public WhispersResponse(ResponseEnum responseenum, Map datas) {
		this.statusCode = responseenum.getStatusCode();
		this.type = responseenum.getType();
		this.code = responseenum.getCode();
		this.desc = responseenum.getDesc();
		this.datas = datas;
	}
	
	public WhispersResponse(HttpServletResponse hsr ,ResponseEnum responseenum, Map datas) {
		this.statusCode = responseenum.getStatusCode();
		hsr.setStatus(this.statusCode);
		this.type = responseenum.getType();
		this.code = responseenum.getCode();
		this.desc = responseenum.getDesc();
		this.datas = datas;
	}
	
	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Map getDatas() {
		return datas;
	}

	public void setDatas(Map datas) {
		this.datas = datas;
	}
}
