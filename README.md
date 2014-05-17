Alphabetize - V1
==============

**JQuery Plugin**

[Alphabetize Demo](http://pavittar.github.io/alphabetize/)

**Installation: ** 

One file and magic begins :
***alphabetize.js*** 


```
<ul class="alphabetize">
    <li>Words</li>
    <li>Elements</li>
    <li>
        <b>Any</b>
    </li>
    <li>
        <div>Thing</div>
    </li>
</ul>

$('.alphabetize').alphabetize()
```

**Options**
```
{
      alphabets       : upper                  || lower,
      showEmpty       : true                   || false,
      
      emptyTemplate   : null                   || <b>I am empty</b>,
      groupClass      : 'alphabetGroup'        || your class,
      alphabetClass   : 'alphabet'             || your class,
      groupValueClass : 'alphabetGroupElement' || your class,
      
      reverse         : false                  || true,
      showUnknown     : true                   || false

}
```

**Revert**
```
$('.alphabetize').alphabetize('destroy')
```

Version
----
1.0.0
License
----
MIT

