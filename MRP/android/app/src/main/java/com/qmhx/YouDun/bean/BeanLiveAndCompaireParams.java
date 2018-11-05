package com.qmhx.YouDun.bean;

public class BeanLiveAndCompaireParams {
    private String pubKey;
    private String signTime;
    private String sign;
    private String InfOrder;
    private String notifyUrl;
    private String session_id;
    private String idName;
    private String idNumber;

    public String getIdName(){return idName;}

    public void setIdName(String idName) {this.idName = idName;}

    public String getIdNumber(){return idNumber;}

    public void setIdNumber(String idNumber) {this.idNumber = idNumber;}

    public String getPubKey() {
        return pubKey;
    }

    public void setPubKey(String puπbKey) {
        this.pubKey = puπbKey;
    }

    public String getSignTime() {
        return signTime;
    }

    public void setSignTime(String signTime) {
        this.signTime = signTime;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public String getInfOrder() {
        return InfOrder;
    }

    public void setInfOrder(String infOrder) {
        InfOrder = infOrder;
    }

    public String getNotifyUrl() {
        return notifyUrl;
    }

    public void setNotifyUrl(String notifyUrl) {
        this.notifyUrl = notifyUrl;
    }

    public String getSession_id() {
        return session_id;
    }

    public void setSession_id(String session_id) {
        this.session_id = session_id;
    }
}
