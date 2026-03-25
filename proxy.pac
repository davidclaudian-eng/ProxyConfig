function FindProxyForURL(url, host) {
    // Bypass proxy for local resources
    if (dnsDomainIs(host, "localhost") ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }
 
    // Main proxy server (replace with your real proxy if you have one)
    return "PROXY 10.10.10.5:8080; DIRECT";
}