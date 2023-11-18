/*
import {m1,m2} from "./m7.js";
import mm3 from "./m7.js";
*/
import mm3, {m1,m2} from "./m7.js";
m1();
m2();
mm3();

/*
   node
   npm (for installing dependency)
   node_modules (contain dependency source code / Auto generated folder)
   npm install dependency_name
   npm install (It will install all depencies listed in package.json)

   import & export
   To use import you will have to make following entry in pakcage.json
   "type":"module"

   Name import & export
   default import & export

   There can be only one default export in a module but there
   may be multiple named export

   in case named import identifier must be name
   but not true in case of default import(Identifier may be different)
   

*/