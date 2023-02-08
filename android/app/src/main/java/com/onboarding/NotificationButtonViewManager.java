package com.onboarding;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class NotificationButtonViewManager extends SimpleViewManager<NotificationButton> {
    @Override
    public String getName() {
        return "NotificationButton";
    }

    @Override
    protected NotificationButton createViewInstance(ThemedReactContext reactContext) {
        return new NotificationButton(reactContext);
    }

    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "press",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onPress")
                        )
                ).build();
    }

    @ReactProp(name = "enabled")
    public void setEnabled(NotificationButton button, Boolean enabled) {
        button.setEnabled(enabled);
    }

    @ReactProp(name = "text")
    public void setText(NotificationButton button, String text) {
        button.setText(text);
    }

}