function firstNonRepeatedChar(str) {
 // Write your code here
	var ans=str[0];
	var cnt=0;
	for(var i=1;i<str.length;i++){
		if(ans==str[i]){
			cnt++;
		}else{
			if(cnt==0){
				return ans;
			}else{
				cnt=0;
				ans=str[i];
			}
		}
	}
	
	 return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
