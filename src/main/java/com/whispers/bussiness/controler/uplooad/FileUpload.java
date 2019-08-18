package com.whispers.bussiness.controler.uplooad;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.ProgressListener;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whispers.framework.common.util.StreamUtil;
import com.whispers.framework.response.ResponseEnum;
import com.whispers.framework.response.WhispersResponse;

@Controller
@RequestMapping("/rest/upload")
@Scope("prototype")
public class FileUpload {
	private String upladPath = "D:" + File.separator + "upload";
	@RequestMapping("/single")
	@ResponseBody
	public WhispersResponse SingleFileUpload(HttpServletRequest request, HttpServletResponse response)
	{
		InputStream in = null;
		OutputStream out = null;
		request = (HttpServletRequest)request;
        try {
        	//1、创建一个DiskFileItemFactory工厂
            DiskFileItemFactory factory = new DiskFileItemFactory();
            //2、创建一个文件上传解析器
            ServletFileUpload upload = new ServletFileUpload(factory);
            //监听文件上传进度
            upload.setProgressListener(new ProgressListener(){
                public void update(long pBytesRead, long pContentLength, int arg2) {
                    System.out.println("文件大小为：" + pContentLength + ",当前已处理：" + pBytesRead);
                }
            });
            //解决上传文件名的中文乱码
            upload.setHeaderEncoding("UTF-8");
            //3、判断提交上来的数据是否是上传表单的数据
            if(!ServletFileUpload.isMultipartContent(request)){
            	 System.out.println("isMultipartContent null ");
            	//按照传统方式获取数据
            	return new WhispersResponse(ResponseEnum.UPLOADSUCCESS,null);
            }
            //4、使用ServletFileUpload解析器解析上传数据，解析结果返回的是一个List<FileItem>集合，每一个FileItem对应一个Form表单的输入项
            List<FileItem> list = upload.parseRequest(request);
			File uploadDir = new File(upladPath);
			if (!uploadDir.exists()){
				uploadDir.mkdir();
			}
			list.forEach(f->{
				if (f.isFormField()){
					String name = f.getFieldName();
					//解决普通输入项的数据的中文乱码问题
					String value = "";
					try {
						value = f.getString("UTF-8");
					} catch (UnsupportedEncodingException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					try {
						value = new String(value.getBytes("iso8859-1"),"UTF-8");
					} catch (UnsupportedEncodingException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					System.out.println(name + "=" + value);
		       	} else {
		       		// 获取文件名
		       		String fileName = f.getName();
		       		//注意：不同的浏览器提交的文件名是不一样的，有些浏览器提交上来的文件名是带有路径的，如：  c:\a\b\1.txt，而有些只是单纯的文件名，如：1.txt
                    //处理获取到的上传文件的文件名的路径部分，只保留文件名部分
		       		fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
		       		System.out.println("fileName " + fileName);
		       		// 获取扩展名
		       		String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
		       		System.out.println("fileSuffix " + fileSuffix);
		       		// 保存路径
	            	File saveFile = new File(uploadDir + File.separator + fileName);
					System.out.println("savePath " + saveFile.getPath());
					try {
						f.write(saveFile);
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
	        	}
			});
        } catch (Exception ex) {
        	System.out.println("ex " + ex.toString());
        	StreamUtil.closeStream(in, out);
        } finally {
        	StreamUtil.closeStream(in, out);
        }
        return new WhispersResponse(ResponseEnum.UPLOADSUCCESS,null);
	}
}
