package com.whispers.framework.common.util;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class StreamUtil {

	public static void closeStream(InputStream in,OutputStream out)
	{
		try {
			if (in != null)
			{
				in.close();
			}
			if (out != null)
			{
				out.close();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
