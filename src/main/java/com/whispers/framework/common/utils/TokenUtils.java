package com.whispers.framework.common.utils;

import java.util.Base64;

public class TokenUtils {
	
	/**
	 * 生成随机token
	 * @return
	 */
	public static String creatToken() {
		HashTool ht = new HashTool(System.currentTimeMillis() + "",HashTool.SHA256,HashTool.getSalt());
		return Base64.getEncoder().encodeToString(ht.digest().getBytes());
	}
}
