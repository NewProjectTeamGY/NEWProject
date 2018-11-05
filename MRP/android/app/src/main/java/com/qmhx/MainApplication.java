package com.qmhx;

import android.app.Application;
import android.content.Context;
import android.support.multidex.MultiDex;

import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.moxie.client.manager.MoxieSDK;
import com.qmhx.BqsDevice.BqsDevicePackage;
import com.qmhx.Location.AMapLocationPackage;
import com.tencent.bugly.crashreport.CrashReport;
import com.umeng.commonsdk.UMConfigure;

import java.util.Arrays;
import java.util.List;

import cn.jpush.reactnativejpush.JPushPackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        private boolean SHUTDOWN_TOAST = false;
        private boolean SHUTDOWN_LOG = false;
        @Override
        protected String getJSBundleFile() {
            if (BuildConfig.DEBUG) {
                return null;
            }
            return CodePush.getJSBundleFile();
        }
    
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new CodePush("dWmXtnFD8gsTM4gyPTFLuCi7YUMr640d5146-dec8-42e1-a5d6-b0066b5d7f48",  MainApplication.this, BuildConfig.DEBUG),
                    new MyReactPackage(),
                    new LinearGradientPackage(),
                    new AMapLocationPackage(),
                    new BqsDevicePackage(),
                    new JPushPackage(SHUTDOWN_TOAST,SHUTDOWN_LOG)
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        UMConfigure.init(this, UMConfigure.DEVICE_TYPE_PHONE, "");
        CrashReport.initCrashReport(getApplicationContext(), "0eb5b0f287", false);
        MoxieSDK.init(this);
    }
}