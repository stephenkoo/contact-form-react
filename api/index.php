<?php 
// this is a mock server for use only in development

// mock
sleep(1);
http_response_code(201);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

echo '{
  "data": {
    "attributes: {
    }
  }
}';

?>