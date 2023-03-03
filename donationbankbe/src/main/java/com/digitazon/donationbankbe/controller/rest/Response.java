package com.digitazon.donationbankbe.controller.rest;

public class Response {
    private String data;
    private int status;

    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    
    @Override
    public String toString() {
        return "Response [data=" + data + ", status=" + status + "]";
    }
}
