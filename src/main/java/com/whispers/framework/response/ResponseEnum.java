package com.whispers.framework.response;

public enum ResponseEnum {
	// 登录成功
	LOGINSUCCESS("SUCC","00001","Login Success."),
	// 登录失败，用户名或密码错误
	LOGINFILAD("ERROE","10002","Login filad."),
	// 上传成功
	UPLOADSUCCESS("SUCC","20001","Upload suceess.");
	// 响应枚举类型，标识业务是否成功或者失败
	private String type;
	// 响应枚举，状态码
	private String code;
	// 响应枚举描述
	private String desc;
	
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

	ResponseEnum(String type,String code, String desc) {
		this.type = type;
		this.code = code;
		this.desc = desc;
	}
	
}
