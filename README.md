   *                     *                                
 (  `                  (  `             )             (   
 )\))(      )          )\))(     (   ( /(   (      )  )\  
((_)()\  ( /(  (   (  ((_)()\   ))\  )\()) ))\  ( /( ((_) 
(_()((_) )(_)) )\  )\ (_()((_) /((_)(_))/ /((_) )(_)) _   
|  \/  |((_)_ ((_)((_)|  \/  |(_))( | |_ (_))( ((_)_ | |  
| |\/| |/ _` |(_-<(_-<| |\/| || || ||  _|| || |/ _` || |  
|_|  |_|\__,_|/__//__/|_|  |_| \_,_| \__| \_,_|\__,_||_|  
                                                         

*Queue appropriate 8-bit soundtrack - also, please read this in your IDE of choice*

Hello, and thank you for the opportunity to interview with MassMutual.

For this take home interview I was instructed to use either JS or Ruby in order to achieve this task.
I have chosen JS, specifically utilizing the WDIO framework (www.webdriver.io)

The set up is the same as with all node porjects, you will need node installed as well as npm.
My config is :  Node version = v8.9.4 
                NPM version = 5.7.1

Once node and npm are installed, you can simply run "npm install" for the various dependancies 
and kick off the test script by running "npm test". This will produce the desired result, but
just in case you can find it below.  Also, please note that the URL https://www.exercise1.com/values
is referenced in the wdio.conf.js file, and does launch the chrome browser to Nowheresville.
Additionally, I have created an element class found in utilities, which is supposed to represented
a web-element..it's stripped down


Results
=======
[chrome  windows nt #0-0] Spec: C:\workspace\MassMutual\test\features\verify-all-numbers-are-currency.feature
[chrome  windows nt #0-0] Running: chrome on windows nt
[chrome  windows nt #0-0]
[chrome  windows nt #0-0] Verify that all number values are in currency format.
[chrome  windows nt #0-0]     Confirm all values are correctly formatted
[chrome  windows nt #0-0]        ✓ When I scrape all dollar elements for currency
[chrome  windows nt #0-0]        ✓ And I derive their number values
[chrome  windows nt #0-0]        ✓ And I convert their numeric values to currency format
[chrome  windows nt #0-0]        ✓ Then I validate that the original currency value is the same as the new currency value
[chrome  windows nt #0-0]
[chrome  windows nt #0-0] 4 passing (309ms)
------------------------------------------------------------------
[chrome  windows nt #0-1] Spec: C:\workspace\MassMutual\test\features\verify-all-values.feature
[chrome  windows nt #0-1] Running: chrome on windows nt
[chrome  windows nt #0-1]
[chrome  windows nt #0-1] Verify Total Balance is correct based on the values listed.
[chrome  windows nt #0-1]     Confirm all the values are in place correctly basedon ID's
[chrome  windows nt #0-1]        ✓ When I scrape elements for dollar elements
[chrome  windows nt #0-1]        ✓ And I scrape elements for label elements
[chrome  windows nt #0-1]        ✓ And I examine their respective attribute: 'id'
[chrome  windows nt #0-1]        ✓ Then I confirm that the values would produce the correct Total Balance
[chrome  windows nt #0-1]
[chrome  windows nt #0-1] 4 passing (259ms)
------------------------------------------------------------------
[chrome  windows nt #0-2] Spec: C:\workspace\MassMutual\test\features\verify-greater-than.feature
[chrome  windows nt #0-2] Running: chrome on windows nt
[chrome  windows nt #0-2]
[chrome  windows nt #0-2] Verify for all values on the screen.
[chrome  windows nt #0-2]     Confirm all values are grater than 0
[chrome  windows nt #0-2]        ✓ When I scrape all dollar elements for values
[chrome  windows nt #0-2]        ✓ Then I expect that all of the numbers are greater than '0'
[chrome  windows nt #0-2]
[chrome  windows nt #0-2] 2 passing (258ms)
------------------------------------------------------------------
[chrome  windows nt #0-3] Spec: C:\workspace\MassMutual\test\features\verify-total-balance.feature
[chrome  windows nt #0-3] Running: chrome on windows nt
[chrome  windows nt #0-3]
[chrome  windows nt #0-3] The total balance is correct based on the sum of the other values.
[chrome  windows nt #0-3]     Confirm values add up to total balance
[chrome  windows nt #0-3]        ✓ When I scrape dollar elements for values sans total balance
[chrome  windows nt #0-3]        ✓ And I take the sum for all values
[chrome  windows nt #0-3]        ✓ And I take the value for total balance
[chrome  windows nt #0-3]        ✓ Then the sum for all elements and total balance should be equal
[chrome  windows nt #0-3]
[chrome  windows nt #0-3] 4 passing (273ms)



Assumptions
===========
1) All elements that are holding currency values are represented in html as div
   Otherwise the same xpath can be represented as '//*[@id="txt_ttl_val"]'. The wildcard takes longer to find.
2) All elements that have 'lbl; as par of their idare represented in html with the label tag
   Otherwise the same xpath can be represented as '//*[@id=lbl_ttl_val"]'. The wildcard takes longer to find.
3) Given that txt_val_3 is missing, I'm going to assume that this is intentional,
   and the reason for this is internal business logic. ==> Nope, changing this to interpret for objective 3.
   Going to validate element matching the pattern.
Additionally, abstracting the test data from the tests themselves is the way to go.  The best 
way to implement this using WDIO is using the before suite hook found in the wdio.conf.js and
either reading it from a flat file or using rest call to retrieve it from a db and storing it
in a global variable.  This will require the creation of an ObjectMother class to sift and 
retrieve the appropriate data set as necessary, but that means that now you can have your BA's
creating fully fledged test cases with even less intervention from your SDETs/QA Engineers.  


Kind Regards,
Felix Livshits, CD