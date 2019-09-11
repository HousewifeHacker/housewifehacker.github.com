Authentication Browser Storage Options
##############################################

:date: 2019-09-10
:category: Code

Before the invention of client side rendering and AJAX, there were web apps that \
required visiting multiple pages. To keep the auth data in the browser for navigating \
to other pages, cookies were invented. Even with single page apps, browser storage is important to \
allow a user to remain authenticated if they refresh the page and possibly if they use \
multiple tabs or windows (depending on implementation). The browser retains the data needed \
to verify who is using the web app and their access. The newer browser storage options \
are local storage and session storage, thanks to HTML5. The collective name for Session \
Storage and Local Storage is Web Storage. Regardless of if you choose to use \
a JWT (JSON Web Token) or not, you still have to decide where to put the auth data. \
Below are some areas to consider when comparing the options. 


 - Storage Capacity: This is unlikely to be the deciding factor for auth data, but web storage holds \
   significantly more than cookies. The 4 Kilobytes of storage per cookie is plenty for effective auth.

 - Browser limitations: Browsers limit the number of cookies being stored. The limit depends on the browser \
   and version, but typical limits are 300 cookies in total and 20 cookies per domain. Web Storage allows \ 
   requesting more storage. Browsers may prompt users to request a certain amount of storage, and the hard drive \
   could be a limiting factor, depending on their device and what else they are doing on it at the same time.

 - Browser support: According to current canIUse data, web storage is known to be supported by ~97% of global \
   browser use. Nearly all of the remaining browser use is unknown. In my opinion,  we have reached a point \
   to safely consider any of the storage options without concern of browser support. 

 - Network traffic: Cookies are attached to each request for your domain. Web storage only lives client side. \
   With web storage, you would use the HTTP Authorization Header and the Bearer scheme to send the auth token. \
   The difference in the size of your auth data with each request would depend on what you are storing.  \
   If you have requests that don't need auth data, the cookies (all of the ones for your domain) \
   would be sent regardless. Alternatively with web storage, the Authorization headers from your web storage could exclude \
   data that is irrelevant for each request.

 - Security: Security is a very complicated topic. All options have vulnerabilities and defenses to \
   protect against "sniffing" (collecting data to read or use). Possible defenses include HTTPS, encrypted data that requires
   data from the server to decrypt, CSRF tokens, and setting cookie headers to HTTPOnly.  

 - Persistence: All options can be cleared by a user (or their software). Web storage does not expire. \
   Cookies can optionally be given an expiration date. JWTs can also be given an expiration datei, which
   could then be used with web storage to give the data an expiration date. \
   This is where sessionStorage and localStorage have different behavior. The sessionStorage is cleared when \
   the session ends. Refreshing the browser does not end the session, but closing the tab does. The session \
   is only available for one tab, so multi-tab use would require re-authenticating the user. The localStorage \
   is persistant across multiple tabs, including after closing a tab.

 




