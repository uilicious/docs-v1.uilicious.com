<div class="git-hide">
The following is the git repo, used for https://docs.uilicious.com/

For feedback on the documentation please do so at our [discord](https://discord.gg/DZCmSRFwq8).

Github issue tracking is not actively monitored, and its generally faster to contact us via our help channel / discord.
</div>

# Welcome!

[UI-licious](https://uilicious.com) is a **simple** and **robust** tool for automating interactions with modern web applications.

Use it to test your web applications to make sure that your users aren't running into unexpected errors in critical user flows like when they are registering for an account or checking out their order.

<!--### How does this work?-->
<!--{% youtube src="https://www.youtube.com/watch?v=c_PBixIBiog" %}{% endyoutube %}-->

### Do I need to know how to code?

**No, not at all!** 

If you know how to use SUM in a spreadsheet application, then you already are good to go.

Don't worry about the wizardry that goes on underneath your web pages.

Just write your tests as if you are telling your dad how to log into Facebook over the phone.
  
```javascript
// It's (almost!) like plain english
I.goTo("https://facebook.com");
I.fill("Email", "peter@example.com");
I.fill("Password", "mysupersecretpassword");
I.click("Login");
I.see("Peter");
```

### But it can be a powerful tool if you can code

UI-licious runs JavaScript underneath, this lets you do things like this:

```javascript
// Use variables...
var email = "peter@example.com";

// and functions...
function getPassword(){
    return ["my", "super", "secret", "password"].join('');
}

// in your test scripts!
I.goTo("https://facebook.com");
I.fill("Email", email);
I.fill("Password", getPassword());
I.click("Login");
I.see("Peter");
```

### Can I use it for &lt;insert front-end framework&gt;?

Yes. 

ReactJS, AngularJS, VueJS, Polymer, VanillaJS, you name it!
 
