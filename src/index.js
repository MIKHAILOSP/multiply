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
    let n2;
    let w=0;
    // let pozitionE;
    if (q.toString(10).length<18) {
      str = q.toString(10);
    } else{
      kolvoleft=first.split("");
      kolvoright=second.split("");
      // kolvoleft1=kolvoleft.reverse();
      // kolvoright1=kolvoright.reverse();
      kolvoleft.reverse();
    kolvoright.reverse();

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
                itog.push(poz[1]);
                poz2=parseInt(poz[0]);
                
              } else {
                itog.push(poz[0]);
                poz2=0;
                }
            }
            if (i==0){
              itogsecond=itog;
              itog=[];
              
            }
              if (i>0){
              n1=0;

              for (let j=1; j<=itog.length;j++){// do .. while
                if (itogsecond[j+w]!=undefined){
                n=(parseInt(itogsecond[j+w])+parseInt(itog[j-1])+n1).toString(10);
                  }else{
                    // if(n1>0){
                    //   n=n1.toString(10);
                    // }
                    if (j==itog.length) { 
                      n=parseInt(itog[j-1])+n1;
                    }
                   
                  }
                  n2=n.toString(10);
                let n3=n2.split("");
                if (n3.length>1) {
                  n1=parseInt(n3[0]);
                  itogsecond.splice(j+w,1,n3[1]);
                  if (j==itog.length){
                    itogsecond.splice(j+w+1,1,n3[0]);
                  }
                } else {
                  itogsecond.splice(j+w,1,n3[0]);
                  n1=0;
                }


                }
                
                itog=[];
                n1=0;
            }  
            w=i;  
      });
      tt=itogsecond.reverse();
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
