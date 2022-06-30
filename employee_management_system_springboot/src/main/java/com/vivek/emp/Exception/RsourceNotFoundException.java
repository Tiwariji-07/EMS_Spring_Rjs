package com.vivek.emp.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class RsourceNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public RsourceNotFoundException(String message) {
		super(message);
	}
	
}
