package com.whispers.framework.webcontainer;


public class WebContainer {
	/**
	 * 容器单例引用
	 */
	private static WebContainer webContainer;
	

	/**
	 * 获取缓存管理器实例，单例
	 * @return
	 */
	public static WebContainer getInsstance(){
		if (null == webContainer)
		{
			webContainer = new WebContainer();
			return webContainer;
		}
		return webContainer;
	}
}
