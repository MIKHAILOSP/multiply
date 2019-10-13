module.exports = function multiply(first, second) {
  // your solution!! OK!!

  let q =(parseInt(first)*parseInt(second))
  let str="";
  let str1="";
  let kolvoleft=[];
  let kolvoright=[];
  let itog=[];
  let itogfirst=[];
  let itogsecond=[];
  let tt=[];
  // let kolvoleft1=[];
  // let kolvoright1=[];
   let poz=0;
   let poz2=0;
   let n;
   let n1=0;
  // let pozitionE;
  if (q.toString(10).length<18) {
    str = q.toString(10);
  } else{
    kolvoleft=first.split("");
    kolvoright=second.split("");
    // kolvoleft1=kolvoleft.reverse();
    // kolvoright1=kolvoright.reverse();

    kolvoleft.forEach(function(e,i){
      
          for (let i=0;i<=kolvoright.length;i++) {
            if (kolvoright[i]!=undefined) {
            poz=(parseInt(kolvoright[i])*parseInt(e)+poz2).toString(10);
            } else {
              if (poz2>0){
              poz=(poz2).toString(10);}
            }
            poz.split("");

            if (poz.split("").length>1) {
              itog+=poz[0];
              poz2=parseInt(poz[1]);
              
            } else {
              itog+=poz[0];
              poz2=0;
              }
          }
          if (i==0){
            itogsecond+=itog[0];
            itog=[];
            
          }
            if (i>0){
            n1=0;
            for (let j=1; j<=itog.length+1;j++){// do .. while
              if (itog[j-1]!=undefined){
              n=(parseInt(itogfirst[j])+parseInt(itog[j-1])+n1).toString(10);
                }else{
                  if(n1>0){
                    n=n1.toString(10);
                  }
                }

              if (n.split("").length>1) {
                n1=parseInt(n[0]);
                itogsecond+=n[1];
              } else {
                itogsecond+=n.toString(10);
                n1=0;
              }


              }
              itog=[];
          }    
    });
    //tt=itogsecond.reverse();
    for (let i=0;i<tt.length;i++){
      str+=tt[i];
    }
    // for (let i=0; i<first.length;i+=17){
    //   kolvo+=first[i+17];
    // }
  }
  
  // kolvonol=str.split("e");
  //  str1=kolvonol[0].split(",");

  // for (i=0; i<kolvonol[1];i++){
  //   q/=10;

  // }

  return str;
}
