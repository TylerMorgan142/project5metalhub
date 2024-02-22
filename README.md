# Metalhub

Metalhub is a site dedicated for the discussion of music in the genre of metal and its many subgenres. The site is targeted towards music lovers who are looking for other people who enjoy the same type of music.

## UX

### User Stories

- As a user I can view a navbar from every page so that I can navigate easily between pages

- As a logged out user I can see sign in and sign up options so that I can sign in/sign up

- As a user I can create a new account so that I can access all the features for signed up users

- As a user I can sign in to the app so that I can access functionality for logged in users

- As a user I can tell if I am logged in or not so that I can log in if I need to

- Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

- As a logged in user I can create posts so that I can discuss my thoughts with other users

- As a user I can view the details of a single post so that I can learn more about it

- As a user I can view the posts page so that I can read the comments about the post

- As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created

- As a user I can see how long ago a comment was made so that I know how old a comment is

- As a user I can read comments on posts so that I can read what other users think about the posts

- As an owner of a comment I can delete my comment so that I can control removal of my comment from the application

- As a user I can see a list of the most followed profiles so that I can see which profiles are popular

- As a user I can view statistics about a specific user: number of posts, follows and users followed so that I can learn more about them

- As a logged in user I can create reviews so that I can share my thoughts with other users

- As a user I can delete reviews that I no longer wish to show on my profile

- As a review owner I can edit my review title, description and rating so that I can make corrections or update my review after it was created

- As a user I can view user's avatars so that I can easily identify users of the application

- As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them

- As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

- As a user I can view all the reviews by a specific user so that I can catch up on their latest reviews, or decide I want to follow them

- As a logged in user I can edit my profile so that I can change my profile picture

- As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed

- As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh

- As a user I can view other users profiles so that I can see their posts and learn more about them

- As a logged in user I can like a post so that I can show my support for the posts that interest me

- As an owner of a comment I can edit my comment so that I can fix or update my existing comment

- As a logged in user I can add comments to a post so that I can share my thoughts about the post

 

## Features

### Existing Features

The site features a conditional NavBar that changes based on whether the user is logged in or out.

If the user is logged out the NavBar will simply display the links to the Sign In/ Sign Up pages.

![Signed Out NavBar](/src/assets/NavBarOut.png)

If the user is logged in the NavBar will display the links to the pages for 
creating posts, creating reviews, the home page, the review page, the users feed for posts from users they follow, the posts that they have liked, the sign-out button and the profile button/image.

![Signed In NavBar](/src/assets/NavBarIn.png)

The navbar also includes the site logo which acts as a home button.

If the user clicks on the "create post" button they will be taken to a form to create a post. This form includes a section for "Title" and "Content". The purpose of these posts is for general discussion of various topics.

![Post creation form](/src/assets/Create_Post.png)

If the user clicks on the "create review" button they are taken to a form to create a review. This form includes a section for "Album", which is a dropdown that makes a request to the API to get a list of albums. It also includes a section for "Title", "Content", and "Rating" which allows users to give an album a rating from 0-5.

![Review creation form](/src/assets/Create_Review.png)

If the user clicks on the "Posts" button or on the Metalhub logo they are brought to the Posts page. This page displays all posts regardless of if the user is following the posters or not. Users can also like posts from this page.

This page also includes a component that shows the sites most followed profiles and a search bar for users to search for specific posts.

![Posts page](/src/assets/Postspage.png)

If a user clicks on a specific post they are brought to the page for that posts. If the user is the owner of the post they can delte/edit it. This page includes a comment section. If a user is the owner of a comment they can delete/edit it.

![Post page](/src/assets/PostPage.png)


If the user clicks on the "Album Reviews" button they are brough to the reviews page. This page displays all album reviews on the website.

![Reviews Page](/src/assets/Reviewspage.png)

If the user clicks on a specific review they are brought to the page for that specific review. If the use is the owner of the review they can edit/delete it.

![Review Page](/src/assets/Reviewpage.png)


If the user clicks the "Feed" button they are brought a page that shows all the posts from users that they have followed.

![Feed](/src/assets/Feed.png)


If the user clicks the "Liked" button they are brought to a page that shows all the posts that they have liked.

![Liked page](/src/assets/Liked.png)


If the user clicks the "Sign Out" button they will be signed out of their account

If the user clicks the "Profile" button they will be taken to their profile page. This page shows how the number of posts/followers/following and displayers all a users posts and reviews. If the account is not the users account there will also be a follow/unfollow button.

![Profile Page](/src/assets/Profile.png)


# React Components

The Navbar Component is always present anywhere on the site

Several React components are used within other parts of the site.
For Example:

    MoreDropdown.js component is used in both Post.js and Review.js.

    The Avatar component is used throughout the site anywhere a profile is displayed

    The Asset component is used in the pages for Posts and Reviews



# Testing

## Code Validation

### HTML 
All html code passed the [W3C validator](https://validator.w3.org/)

### CSS
All css code passed the [W3C validator](https://jigsaw.w3.org/css-validator/#validate_by_uri)

## Responsiveness

All pages have shown to be responsive on larger and smaller screens

## Manual User Stories Testing

- As a user I can view a navbar from every page so that I can navigate easily between pages

    A user can view a functional navbar from every page that can take them between pages

- As a logged out user I can see sign in and sign up options so that I can sign in/sign up

    A logged out user can see functional sign in and sign up buttons on the navbar.

- As a user I can create a new account so that I can access all the features for signed up users

    A user can use the sign up button to create their own account and use it to access all the website's features

- As a user I can sign in to the app so that I can access functionality for logged in users

    After a user has signed up, they can sign in to access all the website's features

- As a user I can tell if I am logged in or not so that I can log in if I need to

    A user can tell if they are logged in or not by looking at the NavBar.
    If a user is logged out they only buttons that will appear are the Sign In and Sign Up buttons
    If a user is logged in they will see buttons to take them to all the relevant pages and their profile image.

- Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

    A logged in user will maintain their logged in status until they choose to log out.

- As a logged in user I can create posts so that I can discuss my thoughts with other users

    A logged in user is able to successfully create their own posts, this can be achieved by completing the following steps:
      Click on the Add Post button on the NavBar
      Fill in the post creation form and save it

- As a user I can view the details of a single post so that I can learn more about it

    A user is able to view the details of a post by clicking on it.
    This will take them to a separate page where they can see more detail about the post.

- As a user I can view the posts page so that I can read the comments about the post

     A user can view a post by clicking on the post.
     This page includes comments left on the posts by all users

- As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created

    A user who owns a post is able to edit their post's title and content.
    This is achieved by the following steps:
      Click on the post to view the detail
      Click the three dots, this will open a dropdown menu
      In the dropdown menu click the edit button
      This will take the user to a form page where they can make their edits.
      When they are finished they can click the save button

- As a user I can see how long ago a comment was made so that I know how old a comment is

    All comments show how long ago they were left next to the profile of the user that left them

- As a user I can read comments on posts so that I can read what other users think about the posts

    A user can view the comments on a post by clicking on the post

- As an owner of a comment I can delete my comment so that I can control removal of my comment from the application

      A user who owns a comment can delete a comment by taking the following steps:
            Navigate the post that the comment is left on
            Find the comment you wish to delete and click the three dots next to it
            Click the delete button

- As a user I can see a list of the most followed profiles so that I can see which profiles are popular

     A user can see a list of the most followed profiles on the right side of most  pages

- As a user I can view statistics about a specific user: number of posts, follows and users followed so that I can learn more about them

    A user can view another users number of posts follows and users followed by navigating to that users profile page

- As a logged in user I can create reviews so that I can share my thoughts with other users

    A logged in user can create reviews can by following these steps:
      Click on the Create Review button on the NavBar
      Fill in the Create Review form and save it.

- As a user I can delete reviews that I no longer wish to show on my profile
      A user can delete their reviews by completing the following steps:
          Navigate to the review you wish to delete
          Click the three dots to open a dropdown menu
          In this dropdown menu click the delete button

- As a review owner I can edit my review title, description and rating so that I can make corrections or update my review after it was created

      A review owner can edit their reviews by following these steps;
        Navigate to the review you wish to edit
        Click the three dots to open a dropdown menu
        In this menu click the edit button
        This will take you to a Review Edit form
        Fill in the form with your edits and save it


- As a user I can view user's avatars so that I can easily identify users of the application
 
     A user can view another user's avatar anywhere that user's profile is displayed


- As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
 
     A user can view all of another user's posts by navigating to that user's profile
     All user profiles include a section showing all the posts they have made

 - As a logged in user I can update my username and password so that I can change my display name and keep my profile secure
 
      A logged in user can update their username and password by completing the following steps:
         Navigate to your user profile
         Click the three dots to open a dropdown menu
         In this menu click the change username or change password button
         This will take the user to a form where they can make the changes they wish

- As a user I can view all the reviews by a specific user so that I can catch up on their latest reviews, or decide I want to follow them

     A user can view all of another user's reviews by navigating to that users profile
     All user profiles include a section that shows all the reviews they have made

- As a logged in user I can edit my profile so that I can change my profile picture
   
     A logged in user can edit their profile by taking the following steps:
         Navigate to your profile page
         Click the three dots to open up a dropdown menu
         In this menu click the edit profile button
         This will take the user to an edit profile form where they can change their profile image

- As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
     
      A logged in user can follow and unfollow other users by clicking the follow and unfollow buttons found on a users profile
      These button can also be found on the most popular profiles list

- As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh

      Using the navbar allows a user to easily and seamlessly navigate throughout different pages without needing to refresh

- As a user I can view other users profiles so that I can see their posts and learn more about them

      A user can view another users profile by clicking on that users avatar
      These avatars appear in various places throughout the site including posts and comments left by the user and on the most followed list

- As a logged in user I can like a post so that I can show my support for the posts that interest me
     
       A logged in user can like a post by clicking the heart button that appears at the bottom of every post

- As an owner of a comment I can edit my comment so that I can fix or update my existing comment
     
       A user who own a comment can edit that comment by following these steps:
         Navigate tho the post that the comment has been left under
         Find the comment and click the three dots
         This will open a dropdown menu
         In this menu, click the edit button
         This will allow the user to make changes to their comment

- As a logged in user I can add comments to a post so that I can share my thoughts about the post

        A logged in user can add comments to a post by completing the following steps:
          Navigate the post under which you wish to leave a comment
          Here the user can see a comment form where that they can fill in


        

# Deployment

This project was deployed to Heroku at [this location](https://metalhub-5230d8c858ac.herokuapp.com/)

The steps for deployment are as follows:

1 Sign up for Heroku

2 Go to the dashboard and create a new app

3 Give the app a name and assign it a region, then click "create app".

4 Navigate to the "Deploy" tab and select Github as the deployment method.

5 Choose the repository to be deployed, you can also choose to enable automatic deployment.

6 At the bottom of the Deployment page click "Deploy Branch"

7 Once the app is deployed, click the "Open app" button in the Heroku dashboard to view the live application.

The frontend app does not use any Config Vars.
