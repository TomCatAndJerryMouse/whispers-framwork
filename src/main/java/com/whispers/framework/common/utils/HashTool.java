package com.whispers.framework.common.utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;


/**
 * 加密参考https://www.cnblogs.com/interdrp/p/4935819.html
 * @author Administrator
 */
/**
 * @author Administrator
 *
 */
public class HashTool {
	// MD5 并没有避免 Hash 碰撞：这意味不同的密码会导致生成相同的 Hash 值。不过，
	// 如果你仍然需要使用 MD5，可以考虑为其加 salt 来进一步保证它的安全性
	public static final String MD5 = "MD5";
	// 160 bits Hash
	public static final String SHA1 = "SHA-1";
	// 强于 SHA-1 – 256 bits Hash
	public static final String SHA256 = "SHA-256";
	// 强于 SHA-256 – 384 bits Hash
	public static final String SHA384 = "SHA-384";
	// 强于 SHA-384 – 512 bits Hash
	public static final String SHA512 = "SHA-512";
	// 硬件的速度已经远远超过任何使用字典或彩虹表进行的暴力攻击，并且任何密码都能被破解，只是使用时间多少的问题,为了解决这个问题，主要想法是尽可能降低暴力攻击速度来保证最小化的损失
	// 目标是使 Hash 函数足够慢以妨碍攻击，并对用户来说仍然非常快且不会感到有明显的延时,到这个目的通常是使用某些 CPU 密集型算法来实现，比如 PBKDF2, Bcrypt 或 Scrypt 。
	// 这些算法采用 work factor(也称之为 security factor)或迭代次数作为参数来确定 Hash 函数将变的有多慢，并且随着日后计算能力的提高，可以逐步增大 work factor 来使之与计算能力达到平衡
	public static final String PBKDF2 = "PBKDF2WithHmacSHA1";
	// 需要进行转换的资源
	private String soures;
	// hash方式 默认md5
	private String hashType = MD5;
	// 当前盐值
	private String salt = "";
	
	/**
	 * 构造函数
	 * @param soures
	 */
	public HashTool(String soures) {
		this.soures = soures;
	}
	
	/**
	 * @param soures 需要转换的内容
	 * @param hashType hash方式
	 */
	public HashTool(String soures,String hashType) {
		this.soures = soures;
		this.hashType = hashType;
	}
	
	/**
	 * @param soures 需要转换的内容
	 * @param hashType hash方式
	 * @param salt 随机盐
	 */
	public HashTool(String soures,String hashType,String salt) {
		this.soures = soures;
		this.hashType = hashType;
		this.salt = salt;
	}
	
	public String getHashType() {
		return hashType;
	}

	public void setHashType(String hashType) {
		this.hashType = hashType;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public String getSoures() {
		return soures;
	}

	public void setSoures(String soures) {
		this.soures = soures;
	}
	
	/**
	 * 转换
	 */
	public String digest() {
		byte [] digstBytes = null;
		try {
			MessageDigest md = MessageDigest.getInstance(hashType);
			// 如果有盐
			if (!salt.isEmpty())
			{
				md.update(salt.getBytes());
			}
			// 转换hash byte数组
			digstBytes = md.digest(soures.getBytes());
		} catch (NoSuchAlgorithmException e1) {
			e1.printStackTrace();
		}
		// 返回
		return hashBytesToString(digstBytes);
	}
	
	/**
	 * 将hash后的byte数组转换成字符
	 * @return
	 */
	private String hashBytesToString(byte [] digstBytes){
		StringBuffer sbf = new StringBuffer();
		for (byte b : digstBytes){
			sbf.append(Integer.toString((b & 0xff) + 0x100, 16).substring(1));
		}
		return sbf.toString();
	}
	
	/**
	 * PBKDF2加密
	 * @return
	 */
	public String digestToPbkdf() {
		PBEKeySpec pbk = new PBEKeySpec(soures.toCharArray(), getSalt().getBytes(),1000,64 * 8);
		byte[] hash = null;
		try {
			SecretKeyFactory skf = SecretKeyFactory.getInstance(PBKDF2);
			hash = skf.generateSecret(pbk).getEncoded();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}catch (InvalidKeySpecException e) {
			e.printStackTrace();
		}
		return toHex(hash);
	}
	
	/**
	 * 转换PBKDF2加密后的byte数组
	 * @param array
	 * @return
	 */
	private String toHex(byte[] array)
	{
	    BigInteger bi = new BigInteger(1, array);
	    String hex = bi.toString(16);
	    int paddingLength = (array.length * 2) - hex.length();
	    if(paddingLength > 0)
	    {
	        return String.format("%0"  +paddingLength + "d", 0) + hex;
	    }else{
	        return hex;
	    }
	}
	
	/**
	 * 获取随机盐
	 * 程序每次重新运行生成的随机盐是按顺序一致
	 * 在正式场景使用时你必须每一个密码 Hash 存储它 slat 值。因为当用户登录系统，你必须使用最初生成的 slat 来再次生成 Hash 与存储的 Hash 
	 * 进行匹配。如果使用不同的 slat（生成随机 slat）那么生成的 Hash 将不同。 此外，你可能听说过多次 Hash 和加 salt。通常就是指创建自定义
	 * 的组合，如：salt+password+salt => hash
	 * @return
	 * @throws NoSuchProviderException 
	 * @throws NoSuchAlgorithmException 
	 */
	public static String getSalt(){
		StringBuilder sb = new StringBuilder(16);
		try {
			// 获取SecureRandom SHA1PRNG为随机算法，SUN为调
			SecureRandom sr = SecureRandom.getInstance("SHA1PRNG","SUN");
			sb.append(sr.nextInt(99999999)).append(sr.nextInt(99999999)); 
			int len = sb.length(); 
			if (len < 16) {
				for (int i = 0; i < 16 - len; i++) { 
					sb.append("0"); 
				} 
			}
		} catch (NoSuchAlgorithmException | NoSuchProviderException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}
}
