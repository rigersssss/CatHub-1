# CatHub Documentation

Welcome to the CatHub documentation, where you can explore and enjoy cat pictures based on your preferences!

## Project Overview

CatHub is a web application designed to provide a delightful experience for cat enthusiasts. The application allows users to fetch and display cat pictures tailored to their preferences regarding breeds and tags. In addition to a vast collection of cat images, CatHub offers detailed information about each cat breed, health care tips for cats, and various other resources.

## Features

### 1. Cat Pictures by Breed (The Cat API)

Users can select a specific cat breed, and the application fetches adorable cat pictures using [The Cat API](https://thecatapi.com/). The breed information includes details such as temperament, energy levels, average weight, average lifespan, and more.

### 2. Cat Pictures by Tag (Pexels API)

Users can also choose to view cat pictures by entering tags. The application fetches images from [Pexels API](https://www.pexels.com/api/), providing a diverse selection of cat photos. Please note that there may be occasional issues with Pexels API, resulting in the inability to retrieve images via tags.

**Note:** Due to recent issues with Pexels API, image retrieval using tags may not function correctly. The API might be temporarily disabled, and key generation is currently unavailable. Check the Pexels API documentation for updates on the issue.

### 3. Cat Facts and Breed Information

Explore interesting facts and detailed information about different cat breeds, including their attitude towards humans, energy levels, average weight, average lifespan, and more. This section aims to provide users with comprehensive insights into the featured cat breeds.

### 4. Health Care Tips and Resources

CatHub goes beyond just images and breed information. Discover valuable resources and tips on how to care for your cat's health, ensuring a happy and fulfilling life for your feline friend.

### 5. Search Functionality

The application includes a search feature allowing users to specify whether they want to view pictures of a particular breed, gather information about it, or explore health care tips.

## Hosting Information

CatHub is currently hosted on Netlify, and you can access the live version of the application at [https://bzajc-cathub.netlify.app/](https://bzajc-cathub.netlify.app/).

## Local Development

If you wish to run the application locally on your device, follow these steps:

1. Create a `.env` file in the root folder.
2. Add your API keys to the `.env` file with the following format:

TCA_API_KEY=your_the_cat_api_key
PEXELS_API_KEY=your_pexels_api_key
