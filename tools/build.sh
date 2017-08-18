#!/bin/bash
echo Build started!

echo Copy website to target
mkdir -p ../target
cp -r ../website/* ../target

echo Apply CDN to html
CSSSource="<link rel=\"stylesheet\" href=\""
CSSTarget="<link rel=\"stylesheet\" href=\"http://lightcdn.azurewebsites.net/"
echo replace "$CSSSource" with "$CSSTarget"
IMGSource="<img src=\""
IMGTarget="<img src=\"http://lightcdn.azurewebsites.net/"
echo replace "$IMGSource" with "$IMGTarget"
for file in $(find ../target -name '*.html')
do
    echo Working on "$file"
    DIR=$(dirname "$file")
    DIR="${DIR#../target}"

    if [ -n "$DIR" ]
    then
        DIR="${DIR#/}/"
    fi

    CurrentCSSTarget="$CSSTarget$DIR"
    CurrentIMGTarget="$IMGTarget$DIR"

    sed -i '' 's|'"$CSSSource"'|'"$CurrentCSSTarget"'|g; s|'"$IMGSource"'|'"$CurrentIMGTarget"'|g' "$file"
done