#!/bin/bash

# Register a new user
curl 'http://localhost:3030/users/' -H 'Content-Type: application/json' --data-binary '{ "email": "user@example.com", "password": "secret" }'

# resendVerifySignup 
curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "resendVerifySignup", "value": { "email": "user@example.com" } }'

# verifySignupLong
curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "verifySignupLong", "value": "[enter token from e-mail]" }'

# verifySignupSetPasswordLong
curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "verifySignupSetPasswordLong", "value": { "password": "secret2", "token": "[enter token from e-mail]" } }'

# sendResetPwd
curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "sendResetPwd", "value": { "email": "user@example.com" } }'

# resetPwdLong
curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "resetPwdLong", "value": { "password": "secret_new", "token": "[enter token from e-mail]" } }'

# identityChange
curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "identityChange", "value": { "user": {"email": "user@example.com" }, "password": "secret", "changes": {"email": "user_new@example.com"} } }'
curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "verifySignupLong", "value": "[enter token from e-mail]" }'

