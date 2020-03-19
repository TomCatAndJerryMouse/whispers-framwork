package com.whispers.framework.response;

public enum ResponseEnum {
	// 登录成功
	LOGINSUCCESS(200,"SUCC","00001","Login Success."),
	// 登录失败，认证失败
	LOGINFILAD(401,"ERROE","10001","Authentication failed."),
	// 注销成功
	LOGOUTSUCCESS(200,"SUCC","00002","Logout Success."),
	// 注销失败
	LOGOUTFILAD(200,"ERROE","00002","Logout filad."),
	// 注册成功
	REGISTSUCCESS(200,"SUCC","00003","Regist Success."),
	// 注册失败
	REGISTFILAD(200,"ERROE","10003","Regist filad."),
	// 验证成功
	VALIDATEUCCESS(200,"SUCC","00004","Validate Success."),
	// 验证失败
	VALIDATEFILAD(401,"ERROE","10004","Validate filad."),
	// 获取用户信息成功
	GET_USER_INFO_SUCCESS(200,"SUCC","00004","Get userInfo Success."),
	// 获取用户信息失败
	GET_USER_INFO_FILAD(500,"ERROE","10004","Get userInfo filad.");
	// 响应枚举类型，状态吗
	private int statusCode = 200;
	// 响应枚举类型，标识业务是否成功或者失败
	private String type;
	// 响应枚举，消息编码
	private String code;
	// 响应枚举描述
	private String desc;

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

	ResponseEnum(int statusCode, String type,String code, String desc) {
		this.statusCode = statusCode;
		this.type = type;
		this.code = code;
		this.desc = desc;
	}
	
}
