
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

