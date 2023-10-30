# History and Evolution

### How Js was created

JavaScript was created in May 1995 in **10 days** by Brendan Eich ant Netscape, and implemented Js for their web browser, Netscape Navigator.

### Main Idea
The idea was that major interactive parts of the client-side web were to be implemented in Java. 

>In Netscape Navigator 2.0 beta 3 (December 1995), it got its final name, JavaScript.

## Standardizing JavaScript

1. ECMA-262 is hosted by Ecma International (primary standard).
2. ISO/IEC 16262 is hosted by International Organization for Standardization (ISO).

## Note
The language described by these standards is called *ECMAScript*, not JavaScript.

1. The term JavaScript refers to the language ans its implementation.
2. The term ECMAScript refers to the language standard and language versions.

## Ecma Technical Committee 39 (TC39)

TC39 is the committee that evolves JavaScript.

### TC39 Process
1. ECMAScript features are designed independently and go through stages, starting at 0 (strawman), ending at 4 (finished).
2. The later stage require prototype implementations and real-world testing.
3. ECMAScript Versions are released once per year and include all features that have reached stage 4 prior to a release deadline.


```mermaid
 graph TD;
      Stage0 --> Stage1 (strawman);
      Stage1 --> Stage2 (proposal);
      Stage2 --> Stage3 (draft);
      Stage3 --> Stage4 (candidate);
      stage4 (finished);
```