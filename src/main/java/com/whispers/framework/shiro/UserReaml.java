package com.whispers.framework.shiro;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import com.whispers.framework.common.utils.HashTool;
import com.whispers.framework.common.utils.TokenUtils;
import com.whispers.framework.entity.User;
import com.whispers.framework.service.impl.UserServiceImpl;

public class UserReaml extends AuthorizingRealm {
	
	@Autowired
	private UserServiceImpl userService;
    /**
     * 提供用户信息返回权限信息
     */
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		System.out.println("AAAAAAAAAAAAAA");
		SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
		// 根据用户名查询用户角色
		Set<Role> roles = null;
		Set<String> roleNames = new HashSet<String>();
		Iterator<Role> iterator = roles.iterator();
		while (iterator.hasNext())
		{
			 roleNames.add(iterator.next().getRole());
		}
		// 将用户角色提供给权限信息
		authorizationInfo.setRoles(roleNames);
		// 从接口获取用户权限
		Set<Permission> permissions = null;
		Set<String> permissionNames = new HashSet<String>();
		for (Permission permission : permissions)
		{
			permissionNames.add(permission.getName());
		}
		// 将用户权限提供给权限信息
		authorizationInfo.setRoles(permissionNames);
		System.out.println("BBBBBBBBBBB");
		return authorizationInfo;
	}
    /**
     * 提供账户信息返回认证信息
     */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationtoken) throws AuthenticationException {
		System.out.println("DoGetAuthentication begain.");
		// 获取界面输入用户登录信息对象
		UsernamePasswordToken authenticationUser = (UsernamePasswordToken)authenticationtoken;
		// 取出登录名查询用户信息
		User dbUser = userService.getUserByUserName(authenticationUser.getUsername());
		if (null == dbUser){
			return new SimpleAuthenticationInfo();
		}
		// 取出当前登录密码使用查询出来的用户盐值加密密码
		String pwd = String.valueOf(authenticationUser.getPassword());
		HashTool ht = new HashTool(pwd,HashTool.SHA1,dbUser.getSalt());
		authenticationUser.setPassword(ht.digest().toCharArray());
		dbUser.setToken(TokenUtils.creatToken());
		System.out.println("DoGetAuthentication end.");
		// 返回新用户认证信息
		return new SimpleAuthenticationInfo(dbUser, dbUser.getPassword(), this.getName());
	}
}