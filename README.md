## Auto Constant!
This space aged babel plugin allows you to create constants
of the same name by simply writing the expression without `const` or assigning value:

Instead of:
```
const FOO_UPDATE_IN_FLIGHT = 'FOO_UPDATE_IN_FLIGHT';
```

simply write:
```
FOO_UPDATE_IN_FLIGHT;
```

... which compiles the same to:
```
var FOO_UPDATE_IN_FLIGHT = 'FOO_UPDATE_IN_FLIGHT';
