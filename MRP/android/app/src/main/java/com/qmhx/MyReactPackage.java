package com.qmhx;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.qmhx.Moxie.MoXieModule;
import com.qmhx.PhoneInfo.ContactsModule;
import com.qmhx.PhoneInfo.PhoneInfoModule;
import com.qmhx.SmAntiFraud.SmDeviceModule;
import com.qmhx.SplashScreen.SplashScreenModule;
import com.qmhx.UDesk.UDeskModule;
import com.qmhx.YouDun.YouDunModule;
import com.qmhx.Download.DownloadApkModule;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MyReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new SplashScreenModule(reactContext),
                new MoXieModule(reactContext),
                new SmDeviceModule(reactContext),
                new RNDeviceModule(reactContext),
                new YouDunModule(reactContext),
                new PhoneInfoModule(reactContext),
                new ContactsModule(reactContext),
                new DownloadApkModule(reactContext),
                new UDeskModule(reactContext)
        );
    }
    
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}