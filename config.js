(function () {
  const localHosts = ["localhost", "127.0.0.1", ""];
  const existingConfig = window.OPHELIA_CONFIG || {};
  const explicitApiBaseUrl = window.OPHELIA_API_BASE_URL || existingConfig.apiBaseUrl || "";
  const normalizedApiBaseUrl = String(explicitApiBaseUrl).trim().replace(/\/$/, "");
  const localFallback = localHosts.includes(window.location.hostname) ? "http://localhost:5159/api" : "";

  window.OPHELIA_CONFIG = {
    ...existingConfig,
    apiBaseUrl: normalizedApiBaseUrl || localFallback
  };
})();
