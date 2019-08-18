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
        	//1������һ��DiskFileItemFactory����
            DiskFileItemFactory factory = new DiskFileItemFactory();
            //2������һ���ļ��ϴ�������
            ServletFileUpload upload = new ServletFileUpload(factory);
            //�����ļ��ϴ�����
            upload.setProgressListener(new ProgressListener(){
                public void update(long pBytesRead, long pContentLength, int arg2) {
                    System.out.println("�ļ���СΪ��" + pContentLength + ",��ǰ�Ѵ���" + pBytesRead);
                }
            });
            //����ϴ��ļ�������������
            upload.setHeaderEncoding("UTF-8");
            //3���ж��ύ�����������Ƿ����ϴ���������
            if(!ServletFileUpload.isMultipartContent(request)){
            	 System.out.println("isMultipartContent null ");
            	//���մ�ͳ��ʽ��ȡ����
            	return new WhispersResponse(ResponseEnum.UPLOADSUCCESS,null);
            }
            //4��ʹ��ServletFileUpload�����������ϴ����ݣ�����������ص���һ��List<FileItem>���ϣ�ÿһ��FileItem��Ӧһ��Form����������
            List<FileItem> list = upload.parseRequest(request);
			File uploadDir = new File(upladPath);
			if (!uploadDir.exists()){
				uploadDir.mkdir();
			}
			list.forEach(f->{
				if (f.isFormField()){
					String name = f.getFieldName();
					//�����ͨ����������ݵ�������������
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
		       		// ��ȡ�ļ���
		       		String fileName = f.getName();
		       		//ע�⣺��ͬ��������ύ���ļ����ǲ�һ���ģ���Щ������ύ�������ļ����Ǵ���·���ģ��磺  c:\a\b\1.txt������Щֻ�ǵ������ļ������磺1.txt
                    //�����ȡ�����ϴ��ļ����ļ�����·�����֣�ֻ�����ļ�������
		       		fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
		       		System.out.println("fileName " + fileName);
		       		// ��ȡ��չ��
		       		String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
		       		System.out.println("fileSuffix " + fileSuffix);
		       		// ����·��
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
