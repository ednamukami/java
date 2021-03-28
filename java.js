var kiosk={
    fruit: "banana",
   get b() {
     return this.fruit;
   },
   set c(newfruit) {
     this.fruit = newfruit;
   }
 };
 console.log(kiosk.b);
 kiosk.newfruit = "mango";
 console.log(kiosk.newfruit);

