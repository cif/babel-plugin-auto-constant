## Auto Constant!
This space aged babel plugin allows you to create constants whose value is the
named expression by simply writing the expression without `const` or assigning a value:

E.g. instead of:
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
```

### Exporting
If you want to export, add two underscores to the end of your expression:
```
FOO_LOADED__
```
...which will compile to
```
var FOO_LOADED = exports.FOO_LOADED = 'FOO_LOADED';
```

*Note if you are only exporting constants, make sure to export a default or any value so that
Babel will define the __esModule property on exports*

## Linting
Unfortunately I haven't made time to come up with a good way around two ESlint rules.
For now you'll want to add these if you want to be lazy:
```
"no-unused-expressions": 0,
"no-undef": 0
```
