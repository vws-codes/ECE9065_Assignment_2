# ECE9065_Assignment_1

Name: Vigneshwaren Sunder (Vinn) \
Student Number: 25142397

## About the Project:
Project is hosted on Github - https://vws-codes.github.io/ECE9065_Assignment_1 \
Just open that link to view my site

- Creation of basic HTML and CSS project showcasing laptops and accessories ecommerce shop. The site has following features:
    - Responsive Designs using media queries
    - Special Sale Badge and line through text decorations for items on sale
    - Special arrow button on either side of the item image on home-page. this does not work without js
    - Main image and 3 image gallery on product-page
    - Fancy buy-now button with hovering effect
    - Better folder structure to prevent easy navigation to desired codes and prevent duplicating some commonly used styles across pages

## Folder Structure:
```
> tree
├───assets
│   └───images
│       ├───logos
│       ├───products
│       └───screenshots
└───css
```

I created separate css files for each component/page kinda structure. And each style will start with that parent component/element name thereby making the dev
easier to navigate to the right css files and make their changes. This also makes sure that the devs will not be maintaining any two duplicate css styles for any
given element

## Follow the given steps to navigate through this project.

Base Dev Repo where I was making commits: https://github.com/vws-codes/ECE9065_Assignment_1

##### Kindly read the given readme to understand about my commit history and messages. I was pushing to a different repository and was unaware of github classrooms. I was able to merge with proper commit history to this repo. However I am not sure if you could see my prev repo prs. So i added screenshots here

- created different branches with valid version names
![branches](https://github.com/ECE9065-2024-UWO/ece9065-24-lab1-assignment-vws-codes/blob/main/assets/images/screenshots/branches.png)

- created various pull requests
![prs](https://github.com/ECE9065-2024-UWO/ece9065-24-lab1-assignment-vws-codes/blob/main/assets/images/screenshots/pullrequests.png)

- PR # 1
![pr1](https://github.com/ECE9065-2024-UWO/ece9065-24-lab1-assignment-vws-codes/blob/main/assets/images/screenshots/pr1.png)

- PR # 2
![pr2](https://github.com/ECE9065-2024-UWO/ece9065-24-lab1-assignment-vws-codes/blob/main/assets/images/screenshots/pr2.png)

- PR # 3
![pr3](https://github.com/ECE9065-2024-UWO/ece9065-24-lab1-assignment-vws-codes/blob/main/assets/images/screenshots/pr3.png)

- PR # 4
![pr4](https://github.com/ECE9065-2024-UWO/ece9065-24-lab1-assignment-vws-codes/blob/main/assets/images/screenshots/pr4.png)

- PR # 5
![pr5](https://github.com/ECE9065-2024-UWO/ece9065-24-lab1-assignment-vws-codes/blob/main/assets/images/screenshots/pr5.png)


## Future Scopes:
- We created each html file for each product. We can just maintain one html file like product-page.html and dynamically load the product info from js/helper.js using inline js scripts. Which means we only have index.html, product-page.html and about.html.
- We had to hard code header and footer for each page. Using js script we can maintain header.html and footer.html and import them effectively.
- Introduce JS to make the gallery on product-page to be more responsive and clickable.
- I made the accessories page quite simple with just price and a buy-button by intention.
- Make use of fancy frontend frameworks like [tailwind-css](https://tailwindcss.com/), [aceternity-ui](https://ui.aceternity.com/) with better fonts
