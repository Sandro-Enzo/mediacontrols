#!/bin/bash

bun build ./src/script.ts ./src/service_worker.ts ./src/action/action.ts --outdir ./out
cp ./src/action/action.html ./out/
cp ./src/action/action.css ./out/
