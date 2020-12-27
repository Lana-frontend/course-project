#include <HTTPClient.h>
const char* ssid = "iPhone";
const char* password = "00000000";
const int Rele = 2;
 
void setup() {
    Serial.begin(115200);
    pinMode(Rele, OUTPUT);
    delay(5000);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to Wi-Fi..");
    }
    Serial.println("Connected to the Wi-Fi network");
}
 
void loop() {
    if ((WiFi.status() == WL_CONNECTED)) {
        HTTPClient http;
        http.begin("http://138.68.105.222:3000/socet/");
        int httpCode = http.GET();
        if (httpCode > 0) {
            String payload = http.getString();
            if(payload == "true") {
               digitalWrite(Rele, HIGH); 
            } else {
               digitalWrite(Rele, LOW); 
            }
        }
        else {
            Serial.println("Error on HTTP request");
        }
        http.end();
    }
    delay(500);
}
