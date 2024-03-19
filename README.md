Debouncing:=>
- type slow= 200ms
-type fast=50ms

Performance:=>
- iphone pro max=14 letters *1000. If 1000 people make API calls then it will make 1000 API calls. 
-with deboundcing - 3 API calss* 1000= 3000 make API calls.
* to give easier user interface.

  //Make an API call after every key press
        //But the difference between 2 API calls 200ms 
        //Decline the API calls
Debouncing with 200ms.
- If difference between 2 key strokes is >200ms.I should decline API calls .If difference between 2 key strokes is <200ms mae API calls.
-/**
  //When i write other stroke it will triggers the reconciliation process means it
    //   has to clear things up.
    //Unmounted . 
    * key-i
    *   -render the component
    *   -useEffect()
    *   -start timer=> make api call after 200ms
    * // Both are the different api calls because every time new variable is taken by useEffect
    * const timer= setTimeOut means it re-renders the component .Destroys the previous component and update it.
    * 
    * 
    * key-ip
    *    -destroy the component.
    *     -re-render the component.
    *   -useEffect()
    *   -start timer=> make api call after 200ms
    * 
    * setTimeOut(200) Even before 200ms it just declines. It just clears this timer up.
    * new timer will be set up when reconciliation occurs.
    * 
    * 
    */
//Time complexity to find in an array is O(n)
//Time complexity to find in an object is O(1)
[i,ip,iph,iphone]

Array.indexOf(n)

new Map()=> is much more optimised.
//LRU cache => If cache get over 100 then remove the objects from the top.
//closures
//event loops
/**Challenges for live data
  1. DL-Get data live
  2. UL-Update the UI 
  3. Don't freeze the page even after one hour
  
/** DATA(Live)
=>Websockets (Two way connection)
  -It is a handshaking connection. Anyone can send the data in     either side.
  -Can send the data from backhand to UI vice versa.
  -No regular interval.
=>API polling
  -Unidirectional.
  -You poll the data.
  -Data flows from server to UI. 
  -There is regular interval.
   (GMail,cricbuzz,youtube)
Q=> Why page is not freezing? 
Ans=> It is cleaning up the mess and we don't release it.



