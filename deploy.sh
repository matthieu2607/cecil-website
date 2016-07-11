#!/bin/bash
set -e

REPO="PHPoole/phpoole.github.io"
SOURCE_BRANCH="source"
TARGET_BRANCH="master"
SITE_DIR="_site"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy."
    exit 0
fi

echo "Starting to update gh-pages..."

cp -R $SITE_DIR $HOME/$SITE_DIR
cd $HOME
git config --global user.name "Travis"
git config --global user.email "contact@travis-ci.org"
git clone --quiet --branch=$TARGET_BRANCH https://${GH_TOKEN}@github.com/${REPO}.git gh-pages > /dev/null
cd gh-pages
cp -Rf $HOME/$SITE_DIR/* .
git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to gh-pages"
git push -fq origin $TARGET_BRANCH > /dev/null
exit 0
