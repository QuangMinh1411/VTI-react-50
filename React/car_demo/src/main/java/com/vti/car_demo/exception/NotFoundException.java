package com.vti.car_demo.exception;
public class NotFoundException extends RuntimeException{
    public NotFoundException(String message){
        super(message);
    }
}
