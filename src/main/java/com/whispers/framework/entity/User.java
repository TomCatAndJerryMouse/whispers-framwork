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
	private int id;
	/**
	 * 随机盐值
	 */
	private String salt;
	
	public String getSalt() {
		return salt;
	}
	public void setSalt(String salt) {
		this.salt = salt;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}
