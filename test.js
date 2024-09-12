/*Q1 What are entry conrol loops and exit control loops?
Entry controlled loop - The loop which has a condition check at the entrance of the loop, 
the loop executes only and only if the condition is satisfied is called as entry control loop
EX-while loop,For loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
2) Exit controlled loop - The loop which keeps on executing until a particular condition is satisfied and 
when the condition is satisfied according to the criteria the loop exits, this is known as exit controlled loop.
EX- Do While loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);




Q2write the output of the following   for (let i=1; i<=3; i++){
    for (let j=1; j<=3; j++){
        if(i==j)continue;
        console.log(i+j);
        
    }
}


l1=outerloop=ram=i=1 i<=3 1<=3 true
l2=innerloop=ram=j=1 j<=3 1<3 true
l4=ram=if(i===j)1===1 is true continue(skip the current iteration and move next)
l2=ram=j=2
l3=ram=if(i===j)1===2is false is print line5
l5=ram=i+j 1+2=3
l2=ram=j=3
l3=ram=if(i===j)1===3 is false is print line5
l5=ram=i+j 1+3=4
l2=ram=j=3;j=<3 3<=3 false go outer loop
l1=outerloop=ram=i=2 i<=3 2<=3  true
l2=innerloop=ram=j=1 j<=3 1<3 true
l3=if(i===j) 2===1 is false is print line5
l5=i+j 2+1=3
l2=ram=j=2 j<=3 2<=3 true
l3=ram=if(i===j) 2===2 is true  continue statement
l2=j=3
l2=if(i===j) 2===3 is false is print line5
l5=ram=i+j 2+3=5
l2=ram=j=3;j=<3 3<=3 false go outer loop
l1=outerloop=i=3 i<=3 true
l2=innerloop=ram j=1 1<=3
l3=if(i===j) 3===1 is false is print line5
l5=ram=i+j 3+1=4
l2=j=2 2<=3 true
l3=ram=if(i===j) 3===2 is false is print line5
l5=ram=i+j 3+2=5
l2=ram=j=3 
l3=ram=if(i===j) 3===3 is true  continue statement
l2=ram=j=3;j=<3 3<=3 false go outer loop
l1=ram=i=4 i<=3 4<=3 is false so is print 
3
4
3
5
4
5
// Q3. Write the output of the following question:-
        let found = false; 
        for (let i = 1; i <= 3; i++) { 
        for (let j = 1; j <= 3; j++) { 
        if (i * j > 4) { 
        found = true; break; 
   } 
       console.log(i, j); 
} 
      if (found) break; 
}


output:-
1 1
1 2
1 3
2 1
2 2

Q4. Write the output of the following question:-
let pattern = ''; 
for (let i = 1; i <= 5; i++) { 
for (let j = 1; j <= i; j++) {
pattern += '*';
} 
pattern += '\n';
}
console.log(pattern);



i=1=ram outer loops runs from 1 to 5
i<=5, 1<=5 true
j=1=ram, inner loop convert value of i.
j<=i, 1<=1
pattern += '*' = pattern'*'
pattern += '\n' = pattern '*\n'
i=2=ram 
i<=5, 2<=5 true
j=1=ram, j run from 1 to 2
j<=i, 1<=2
pattern += '*' = pattern'*'
pattern += '*' = pattern'**'
pattern += '\n' = pattern '**\n'
i=3=ram 
i<=5, 3<=5 true
j=1=ram, j runs from 1 to 3
j<=i, 1<=3
pattern += '*' = pattern'*'
pattern += '*' = pattern'**'
pattern += '*' = pattern'***'
pattern += '\n' = pattern '*\n**\n***\n'
i=4=ram 
i<=5, 4<=5 true
j=1=ram, j runs from 1 to 4
j<=i, 1<=4
pattern += '*' = pattern'*'
pattern += '*' = pattern'**'
pattern += '*' = pattern'***'
pattern += '*' = pattern'****'
pattern += '\n' = pattern '*\n**\n***\n****\n'
i=5=ram 
i<=5, 5<=5 true
j=1=ram, j runs from 1 to 5
j<=i, 1<=5
pattern += '*' = pattern'*'
pattern += '*' = pattern'**'
pattern += '*' = pattern'***'
pattern += '*' = pattern'****'
pattern += '*' = pattern'*****'
pattern += '\n' = pattern '*\n**\n***\n****\n*****\n'



Q5 *  *  *  *  * 
        *  *  *  * 
             *  *  * 
                  *  * 
                       *

for(let i=1; i<=5; i++){
    for(let j=1; j<=i-1; j++){
        process.stdout.write("    ")
  }
  for(let k=1;k<=5-(i-1);k++){
    process.stdout.write(" * ")

  }
  console.log();
  
} 
  


Q6 write a js program for finding prime number between 1-100
let num=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  num++
  
}

if(num==2)

console.log(j)
num=0
}



Q7 code for anybase to anybase number system conversion ?

// step 1 any base to decimal
function anybasetodecimal(num,base){
        let ans=0;
        let pow=1;
        while(num>0){
            let rem=num%10;
            num=Math.floor(num/10)
            rem=rem*pow;
            ans=ans+rem;
            pow=pow*base;
        }
        return ans;
        
        }

    //  step 2 decimal to any base
        function decimaltoanybase(num,base){
            let ans =0;
            let pow =1;
            while(num>0){
                let rem=num%base;
                num=Math.floor(num/base);
                rem=rem*pow;
                ans=ans+rem;
                pow=pow*10;
            }
            return ans;
            
            }
    //  step 3 anybase to anybase

function anybasetoanybase (num1, base1, base2){
    let decimalnumber=anybasetodecimal(num1,base1);
    let finalconvertednumber=decimaltoanybase(decimalnumber, base2);
    console.log(finalconvertednumber);
    
}
anybasetoanybase (45,10,8)



Q8 code for any base addition?
function anybaseaddition(base ,num1,num2){
        let ans=0;
        let c=0;
        let pow=1;
        while(num1>0||num2>0||c>0){
            let num1ld=num1%10;
            let num2ld=num2%10;
            num1=Math.floor(num1/10);
            num2=Math.floor(num2/10);
            let d=num1ld+num2ld+c;
            c=Math.floor(d/base);
            d=d%base;
            ans+=d*pow;
            pow=pow*10;
    
    
        }
        return ans;
    }
    let sum=anybaseaddition(2,10,11)
    console.log(sum) */



