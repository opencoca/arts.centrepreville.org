# camp_preville

#!/bin/bash

# This README is a script. It will setup and encrypt the index.html file

# implementation of LT2D

#### This readme is the setup script ;)
#### ![Website](https://img.shields.io/website?label=Pr%C3%A9ville&up_message=online&url=https%3A%2F%2Farts.centrepreville.org%2F) https://arts.centrepreville.org 
#### [![Netlify Status](https://api.netlify.com/api/v1/badges/e75ec369-ba7d-4e12-a04a-8e370e3f91c0/deploy-status)](https://app.netlify.com/sites/sharp-wright-a04f34/deploys) https://netlify.centrepreville.org/


#### Requires https://github.com/robinmoisson/staticrypt so let's install that
     
     npm install staticrypt

#### This readme will run the following

#### thereby encryting the latest build of LT2D 
#### so long as this is run from inside a https://github.com/opencoca/lt2d_school repository
##### Please note when updaing password it's a good idea to also commit the new version's submodule https://github.com/opencoca/lt2d_school



    staticrypt ./index.html \
       ArtOnline23 \
       -t "Preville Online" \
       -i "Veuillez entrer le mot de passe pour de cette session // Please enter the password for this session" \
       -f ./password_template.html \
       -o ./index.html

# License
#### Copyright 2019–2021 12787326 Canada Inc.
#### Licensed under the AGPLv3: https://opensource.org/licenses/agpl-3.0
