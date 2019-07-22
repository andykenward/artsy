https://github.com/artsy/graphql-workshop#logging-in

Log into https://www.artsy.net
open dev tools and in console type

```
sd.CURRENT_USER.accessToken
```

copy token string into [`.env`](./.env)

```
REACT_APP_USER_TOKEN=your-token-here
```
