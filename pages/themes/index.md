---
title: Themes
description: "Ready to use themes for Cecil."
menu: 
  main:
    weight: 40
  themes:
    weight: 0
#redirect: https://github.com/cecilapp?q=theme#org-repositories
---
<!--
```bash
curl -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=theme+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, url: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/themes.json
```
-->