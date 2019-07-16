package com.whispers.framework.response;

import java.util.List;

public class WhispersResponse {
	
	// 响应类型
	private String type;
	// 描述
	private String code;
	// 描述
	private String desc;
	// 响应数据
	private List<Object> datas;
	
	public WhispersResponse(ResponseEnum responseenum, List<Object> datas) {
		this.type = responseenum.getType();
		this.code = responseenum.getCode();
		this.desc = responseenum.getDesc();
		this.datas = datas;
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
	public List<Object> getDatas() {
		return datas;
	}
	public void setDatas(List<Object> datas) {
		this.datas = datas;
	}
}
