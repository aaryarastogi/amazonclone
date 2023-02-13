#include <iostream>
using namespace std;
int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--){
	    int n,x,y;
	    cin>>n>>x>>y;
	    int arr[n];
	    int sum=0;
	    for(int i=0;i<n;i++){
	        cin>>arr[i];
	        sum+=arr[i];
	    }
        cout<<"sum is"<<sum<<endl;
	    int s=0;
	    for(int i=0;i<n;i++){
	        if(arr[i]>x){
	            s+=(arr[i]-y);
	        }
	    }
	    if(s<sum){
	        cout<<"COUPON"<<endl;
	    }
	    else{
	        cout<<"NO COUPON"<<endl;
	    }
	}
	return 0;
}
