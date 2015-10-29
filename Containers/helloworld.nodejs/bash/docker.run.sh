#!/bin/bash

docker run -p 8085:8085 -p 5432:5432 -p 5672:5672 -p 15672:15672 -p 4369:4369  sergeyd/ubuntu-node-js
