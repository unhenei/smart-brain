# smart-brain (face recognition app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
It was a full-stack project of ZTM bootcamp, where I built a front-end with Creact React App, a back-end server with express, and a database with PostgreSQL.\
Here is the front-end code source.\
Besides the original requirement, I expended the project and added several other features to make it more appealing.\
\
<strong>Note: To make a full introduction of the project, the following content is about both the front-end and the back-end.</strong>

## The Original Project
### Dynamic Content Rendering
The dynamic content rendering by modifying the app's state helped minimize unnecessary page reloads, and improved the user experience.

### API connection
The face recognition function was enabled by connecting with API.\
Other than the document and searching online, I also sought help from the customer service to discuss the problem I faced, and eventually succeeded on connecting the API shortly after it went through a major update. (The recent update was the main reason that the source online was mostly unrelated.)

## Added Features
### Multiple Faces Detection
Despite the original outline of the project provided by the bootcamp, I wanted to make the API to its fullest (just as the demo on its site), which is why I explored the code further and enabled the multi-faces detection.

### Profile Page
When there is a registration process, one would expect there to be a membership profile, where you could edit the setting or check your data. That is why I wanted to build a profile page.\
\
In an app, it is logical to keep the look in consistency, and also to make use of the components to the fullest, the profile page was mainly composed with codes written already.\
What could be improved here, is to make the form (used by sign in, register, profile) into a component, so the code would be cleaner. I chose not to do that because there were only three uses, and the contexts were very different. For now, it's sufficient to simply copy the form for each use. However, if the app grows in the future, it may be worth creating a component for the form.\
\
My main focus was on the algorithms. There was not much of personal information to provide, so I went with the basic functions, such as changing username, changing password, and the option to delete the account.\
The username changing was easy, but it took me some time to change the password while not changing the username.\
I also made sure to add confirmation process when crucial changes were made. For example, double check the new password by asking user to type the password twice, and show a popup when the account deletion button is clicked.

### Notification: Toaster Package
One thing I noticed after building the profile page is that, the user wouldn't know if the password changes were successful until they sign out and try sign in again, which is very inconvenient and could cause login issue (the user don't know to use the old password or not).\
Same goes when there was an error occurred during registration or signing in. If there was no message, one would think the website was broke, instead of checking their own input. Therefore, I wanted to add a notification box whenever an input was submit.\
I found out a package that was close to my vision, and the app was greatly improved shortly.

## Future Improvements
### CSS Code
While tachyons package was really convinient for styling, I found that using it carelessly could make the code a mess, because then there would be three possible place where the code pieces was styled, which are, the <code>style</code> syntax in the JSX, the tachyons packages (via <code>className</code> syntax), and the CSS file.\
A more systematic way to unify the code for styling is needed.

### API Key
The API Key should be hidden to prevent misuse. The step was skipped due to the size and goal of the project.
