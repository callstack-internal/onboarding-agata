package com.onboarding;

import android.content.Context;
import android.graphics.Color;

import androidx.appcompat.widget.AppCompatButton;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class NotificationButton extends AppCompatButton {

    public NotificationButton(Context context) {
        super(context);
        this.setTextColor(Color.BLUE);
        this.setOnClickListener(viewClicked -> {

            WritableMap event = Arguments.createMap();
            event.putString("action", "click");

            ReactContext reactContext = (ReactContext) getContext();
            reactContext
                    .getJSModule(RCTEventEmitter.class)
                    .receiveEvent(
                            getId(),
                            "press",
                            event
                    );

        });
    }
}
