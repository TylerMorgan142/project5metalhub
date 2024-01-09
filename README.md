# Metalhub

Metalhub is a site dedicated for the discussion of music in the genre of metal and its many subgenres. The site is targeted towards music lovers who are looking for other people who enjoy the same type of music.

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

![Post page](/src/assets/Postpage.png)


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