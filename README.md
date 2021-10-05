# camp_preville

#!/bin/bash


# Temp implementation of LT2D

#### This readme is the setup script

#### Requires https://github.com/robinmoisson/staticrypt
#### `npm install -g staticrypt`
####

#### This readme will run the following

#### thereby encryting the latest build off LT2D 
#### so long as this is run from inside LT2D's dist



staticrypt ./index.html \
   preville2122 \
  -t "Preville Online" \
  -i "Veuillez entrer le mot de passe pour de cette session // Please enter the password for this session" \
  -f  ../staticrypt-gh-pages/cli/password_template.html \
  -o ./index.html

# License
#### Copyright 2019–2021 12787326 Canada Inc.
#### Licensed under the AGPLv3: https://opensource.org/licenses/agpl-3.0
