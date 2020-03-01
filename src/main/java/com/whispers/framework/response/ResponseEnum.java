package com.whispers.framework.response;

public enum ResponseEnum {
	// 登录成功
	LOGINSUCCESS("200","SUCC","00001","Login Success."),
	// 注册成功
	REGISTSUCCESS("200","SUCC","00002","Regist Success."),
	// 登录失败，用户名或密码错误
	LOGINFILAD("200","ERROE","10002","Login filad.");
	// 响应枚举类型，状态吗
	private String statusCode = "200";
	// 响应枚举类型，标识业务是否成功或者失败
	private String type;
	// 响应枚举，消息编码
	private String code;
	// 响应枚举描述
	private String desc;
	
	public String getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(String statusCode) {
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

	ResponseEnum(String statusCode, String type,String code, String desc) {
		this.statusCode = statusCode;
		this.type = type;
		this.code = code;
		this.desc = desc;
	}
	
}
