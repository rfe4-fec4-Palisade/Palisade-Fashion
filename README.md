
# Palisade Fashion - Ecommerce Single Page Application


As a Front-End Capstone (FEC) project at HackReactor, we were asked to create a single page application for an ecommerce retail site. The goal of this project was to work in a group of four to fullfill a ficticious client's ask using only React, Javascript, CSS, HTML, and the Atelier API which supplied the product data. Each person in the team picked one of the four widgets (Overview, Related Products, Questions&Answers, Ratings&Reviews) to build with full functionality and appealing visual design based on the client's requirements.

![alt](https://media.giphy.com/media/DPpKzrUoNLx8Pv8U71/giphy.gif)
## Authors

- [@Katie](https://github.com/katscap)
- [@Liam](https://github.com/whouston8)
- [@Sandra](https://github.com/SandraM1)
- [@Francisco](https://github.com/francisco-cmyk)



## Tech Stack

**Client:** React, Javascript, CSS, HTML, Axios

**Server:** Node, Express, Axios

**Testing:** Jest, Enzyme


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Demo

Insert gif or link to demo

Overview:

The Overview section is responsible for allowing a user to see the main product images, choose between different styles available for a specific product, as well as add their selected choice to their cart. The section also displays product descriptions that allow the user to have a better idea of their chosen product.
Important functionality of this section was to allow the user to effortlessly click through each style of a given product, display a high resolution image, and be able to see a zoomed in version of the image.  Implementation of this functionality was accomplished with first retrieving data from the Atelier API in order to receive all necessary information for a given product. With the use of React Hooks, more specifically useState and useEffect, I was able to save the necessary information in a top level component and pass down state as needed.
A challenge that I faced was implementing the zoom in feature of the main image displayed. I needed to create a zoomed in state that was only accessible once the user is within the expanded state. From there I needed to track the position of the user’s mouse and given the X and Y coordinates of their mouse position continuously update the transform origin property of the zoomed in image.
A major consideration that I needed to take into account before implementing the features of my section was organizing each component properly in order for one component to be able to change the state of another. For example, when the user clicks on a style, the main image as well as the thumbnails located on the left side of the page need to be updated. Organization and planning before starting on my section were key to successfully completing each functionality feature.


Main Overview:

![Overview1](https://media.giphy.com/media/zfq2rAFvPIThGxUmwR/giphy.gif)

Product Styles & Add to Card

![product-styles](https://media.giphy.com/media/VXIs9nSflOT5Oy543m/giphy.gif)

Image gallery & Zoom Feature

![imageGallery](https://media.giphy.com/media/VfKAlgJNposUC5UWtt/giphy.gif)

------------------------------------------------------------------------------

Related Products:
The Related Products component dynamically renders a list of related products based on the current product page. Additionally, the component also contains an ‘Add to Outfit’ feature that allows a user to save items to their own personalized outfit.

This component uses React Hooks and implements useState and useEffect. React Hooks was a simple and effective tool for achieving the demands of this component. The carousel feature in Related Products cycles through 4 related products upon each arrow click. Additionally, the ‘Add to Outfit’ feature uses window.localStorage to save the users personalized list as well as retrieve that data when the user revisits the application.

Main challenges included identifying state variables to represent the rendered Related Products as well as implementing a modal feature with a comparison table. Possible future features would include more attractive styling such as hover effects, smoother render transitions and cleaner looks for the comparison table and modal pop-up.


Related Products Carousel

![caraousel](https://media.giphy.com/media/E5eIpFC5uVDy7QyVnO/giphy.gif)

Add Outfit

![add-to-outfit-button](https://media.giphy.com/media/gonpoTom2JLKn2SARU/giphy.gif)

---------------------------------------------------------------------------

Question and Answers:

The Questions & Answers widget is responsible for dynamically rendering a list of questions and its respective answers based on the current product chosen by the user. The widget also has two large buttons, one to load more questions since there are only two Q&As rendered initially, and an add a question button which posts user input to the Atelier API on successful submission.

The subcomponents responsible for functionality in this widget use a mix of regular React state while others use React Hooks which implement useState and UseEffect. The largest functional component which houses the rest of the subcomponents uses a regular state alongside componentDidMount to retrieve the question data from the API. On the other hand, the minor components use React Hooks to efficiently manipulate data and set it to state without major restructuring of the widget since the flow of data in React is largely unidirectional.

Some of the major challenges here were initially rendering a limited list of question and answers and allowing event handlers to smoothly expand that list. Additionally it was a challenge to implement a search bar that would filter that rendered list at any given time. As for the modals which handled user input, the challenging part there was validating data for the API to accept while also signaling the user to correct the input information. Possible future implementations would be to create a search bar that filters all data (even that which is not displayed on screen) and for the modals to smoothly transition back to buttons after successfully submitting.


Q&A List and Expansion

![q&AList](https://media.giphy.com/media/ffHMVLd3ZllTrxXwLm/giphy.gif)

Search Bar

![search bar](https://media.giphy.com/media/OxQqqmnvimNAojfNhN/giphy.gif)

Modals

![q&a modal](https://media.giphy.com/media/AOkginFAqLNxwVPekB/giphy.gif)

---------------------------------------------------------------------------

Ratings and Reviews:

The ratings and review section is composed of two main panels, on the left is the aggregate metadata panel that displays a breakdown of the star ratings and average characteristic ratings of the selected product. Each star value listed can be clicked on to sort the current reviews by rating. For example, clicking on ‘5 star’ will display only five star reviews. The user may click on the rating again to remove, or click the ‘remove all’ button to reset the filters.  The filters are also stackable, so users may filter by more than one rating at a time. On the right is the reviews list, which displays two reviews by default, but can display more if the ‘more reviews’ button is clicked. Clicking this button will display two more reviews, until there are no more to display. Users may also sort the reviews by ‘relevance’, ‘helpful’, and ‘newest’.

To implement the ratings and characteristics breakdown, a get request is first made to the metadata endpoint using the current product ID, which is determined by the topmost React component. The response data includes the number of reviews for each star value, which was used to calculate both the average star rating, and the breakdown of ratings. The breakdown visual was achieved by passing in the calculated percentage as a prop to  styled components.Each rating bar is a set of nested divs, with the innermost div being a percentage of the width of the outermost div. The average characteristics visual was achieved in the same way.

One of the major challenges of the metadata panel was implementing the filter feature. The problem was that I needed to display all the reviews when no filter was selected, but only some of the reviews when filters were selected. To solve this problem, I created another state variable for star filters at the topmost review component. The review list component renders the list conditionally: if the filter array is empty, render every review, if it is not empty, render only the reviews that have a star rating included in the array. In the end, this was successful and allowed users to select, stack, and remove filters to their liking.

The review list panel consists of several features. The first of which is the sort component, which functions by taking the selected value and making a new get request to the reviews endpoint of the Atelier API. The sort field is passed in as a query parameter. Each individual review tile consists of data about the review, as well as two buttons to either mark the review as helpful or report. Upon click. The buttons send a put request to the API and thank the user for their feedback.

One of the major challenges of this feature was implementing the ‘more reviews’ button. The problem is that we do not want to display all of the reviews for a product unless the user actually wants to see them all. To solve this problem, I created another state variable in my topmost component that defaulted to 2. The review list would only render the number of reviews that the state specified. Upon clicking the ‘more reviews’ button, the state would increment by two and prompt the review list component to render two more reviews. This would also maintain the order of the reviews listed.
Lastly, next to the ‘more’ reviews button is the ‘add a review’ button, which opens up a modal for the user to write a new review. It has required fields that will stop a user from posting a review if for example, no username was given. It also features an ‘upload photo’ button.

One of the major challenges of this component was only rendering the characteristics that existed for the selected product. Attempting to send a rating for a characteristic like ‘length’ on a product that did not have that characteristic-- for example, a shoe-- would not succeed because the API does not accept post requests with incorrect fields. To remedy this, I needed to only render radio inputs for valid characteristics. The only way to know which characteristics were present is to reference the metadata, so I passed down the metadata retrieved from my topmost review component to the form component and mapped over it to render the characteristics input form.

Another major challenge I had was implementing the upload file button with preview. I found that photos uploaded locally by a user would not persist since the images aren’t being hosted anywhere. To remedy this, I created a blob url to temporarily render a preview of the photos, but behind the scenes, would send dummy photos to the Atelier API. This way, the user gets the experience of uploading, but we do not actually have to worry about hosting the image behind the scenes.

Overall, this project really highlighted the importance of planning where certain state variables should live and how making API requests and declaring state as high up as possible can really clean up the code and limit the number of requests that need to be made overall. In general, I found that this DRYs up the code and really makes it easier to add additional features.

Review List

![review list](https://media.giphy.com/media/PVjztyJK4PXy83NoEg/giphy.gif)

Modal

![review modal](https://media.giphy.com/media/qYiz7Ygl2rg4ULALR4/giphy.gif)

Modal Input Field Validation

![review modal validation](https://media.giphy.com/media/OtYwoVsJ35glUIZKlT/giphy.gif)


Footer:

![footer](https://media.giphy.com/media/HIdhtZDxy1EZFMPj29/giphy.gif)

## API Reference

#### Get all products

```http
  GET /products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `integer` | Selects the page of results to return. Default 1. |

#### Get item

```http
  GET /products/:product_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product_id`      | `integer` | Required ID of the Product requested |




## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

