#!/bin/bash
set -m # enable job control
echo "Starting test server..."
echo "Stop the server with Ctrl-C"
python3 -m http.server 8000 --directory ./virginia.clubrunning.org & # start server
sleep 1
open http://localhost:8000
fg
