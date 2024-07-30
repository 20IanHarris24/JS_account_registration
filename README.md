# Account Registration

In this exercise you will build a form in which you can simulate a creation of an account to some web application. The purpose of this exercise is to practise on using different event listeners _( several are needed )_ but also to create a basic application that is comprised of HTML, CSS and JavaScript.

The form should have to following content and functionlity.

1. Five inputs must be included and they should reside within a `<form>`. `name`and `username` which must be of type text. One input for `email` that is of type email and two inputs for `password` and `confirm password`. They should of course be of type password.

2. One input or button for submitting the form.

3. Every input should be accompanied by a label and they must be connected. That means that if you click on the label, the corresponding input gets selected _( focus )_. You are **NOT!** allowed to use the `for` attribute on the label in order to solve this.

4. All of the inputs must be mandatory, meaning that you shouldn't be able to submit the form if one of the inputs is missing a value.

5. The `password` must be atleast 8 characters long. If the password is not of length, the input should receive appropriate styling to visualize this for the user. When the passwords is long enough the styling returns to normal _( or to an affirmative state if you would like )_.

6. The `confirm password` must be validated to be identical as the `password`. If that's not the case, the input should receive appropriate styling to visualize this for the user, much like the previous part.

7. If the `password` or the `confirm password` has not been correctly typed, the submit button should be disabled.

8. There must be a submit event in the application. When the form is submitted all of the data should be presented in an object like this:

```js
const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};
```

This object is to be written to the console or written in an alert. The values should of course be corresponding to the values that the user have typed.

9. I would like that you also focus on writing clean code and use decent, thought-through, stylings.

_( The image below is just AN EXAMPLE on how it CAN look! You have free reins on the design. )_

<figure style="text-align: center;"><img src="example-img.png">
<figcaption>Example</figcaption></figure>
