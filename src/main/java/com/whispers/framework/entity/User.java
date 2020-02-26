package com.whispers.framework.entity;

import java.io.Serializable;

import org.apache.shiro.authc.UsernamePasswordToken;

/**
 * 用户类 继承UsernamePasswordToken
 * @author Administrator
 *
 */
public class User extends UsernamePasswordToken implements Serializable{
	
	private static final long serialVersionUID = -6539506759384094975L;
	
	/**
	 * 新增ID属性
	 */
	private String id;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
}
