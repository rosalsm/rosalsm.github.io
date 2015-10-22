### How to make columns in sass

We normally use a percentage of the width to make columns, that way we can redistribute the available space for the comuns in an specific way. However sometimes we don't realize how different the result can be from 33% to 33.3333333%

If we want 2 columns:
```
.column{
width: 100% * (1/2);
}
```

If we want 3 columns:
```
.column{
width: 100% * (1/3);
}
```

If we want n columns:
```
.column{
width: 100% (1/n):
}
```
