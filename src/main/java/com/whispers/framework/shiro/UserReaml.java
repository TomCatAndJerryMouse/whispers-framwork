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

import com.whispers.framework.entity.User;
import com.whispers.framework.service.UserService;

public class UserReaml extends AuthorizingRealm {
	
	@Autowired
	private UserService userService;
    /**
     * 提供用户信息返回权限信息
     */
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		System.out.println("AAAAAAAAAAAAAA");
		String username = (String)principals.getPrimaryPrincipal();
		SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
		// 根据用户名查询用户角色
		//TODO
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
		System.out.println("CCCCCCC");
		User user = new User();
		System.out.println("DDDDDDD");
        // 把token转换成User对象  
		UsernamePasswordToken usernamepasswordtoken = (UsernamePasswordToken)authenticationtoken; 
		user.setUsername(usernamepasswordtoken.getUsername());
		user.setPwd(String.valueOf(usernamepasswordtoken.getPassword()));  
		boolean isHasUser = userService.checkLogin(user);
		if (isHasUser)
		{
			System.out.println("DDDDDDD");
			return new SimpleAuthenticationInfo(authenticationtoken.getPrincipal(), user.getPwd(), this.getName());
		}
		else
		{
			System.out.println("FFFFFFFFF");
			return null;
		}
	}
}