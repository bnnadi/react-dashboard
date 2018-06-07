#!/bin/bash
DESTINATION="~/dev.denadis.com/public/dashboard/" 

echo "Fetch updates"
git pull
echo "Install new modules"
yarn
echo "Build Dashboard"
yarn build
echo "Sync up public folder"
rsync -r build/ $DESTINATION