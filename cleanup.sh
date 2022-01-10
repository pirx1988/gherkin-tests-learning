#!/bin/bash

if [ -f .env ]; then
  rm .env
fi

if [ -f .env.latest ]; then
  rm .env.latest
fi

if [ -f .env.sprint ]; then
  rm .env.sprint
fi