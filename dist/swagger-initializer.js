window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [{ url: "https://raw.githubusercontent.com/greenbone/openvas-scanner/c510747615140756adaa09f4968d3038ad0d5f69/rust/api/openapi.yml", name: "Scanner API" },{ url: "https://raw.githubusercontent.com/greenbone/openvas-scanner/main/rust/doc/reverse-sensor-openapi.yml", name: "Reverse Scanner API" }],"urls.primaryName": "Scanner API",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
