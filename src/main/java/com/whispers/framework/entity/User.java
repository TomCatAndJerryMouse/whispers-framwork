package com.whispers.framework.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 用户类 继承UsernamePasswordToken
 * @author Administrator
 *
 */
public class User implements Serializable{
	
	private static final long serialVersionUID = -6539506759384094975L;
	
	/**
	 * 新增ID属性
	 */
	private int id;
	
    /**
     * The username
     */
    private String username;

    /**
     * The password, in char[] format
     */
    private String password;
    
    public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	/**
     * 随机token
     */
    private String token;
    
	/**
	 * 随机盐值
	 */
    @JsonIgnore
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@JsonIgnore
	public String getPassword() {
		return password;
	}
	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}
	
}
