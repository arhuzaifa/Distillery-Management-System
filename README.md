# Bourbon Distillery Management Application Documentation

## Overview

The Bourbon Distillery Management Application is a full-stack web application developed using React for the frontend and Spring Boot for the backend. It allows users to manage information related to bourbon distilleries, including their name, license number, address, as well as collections of bourbons and customers associated with each distillery.

## Frontend (React)

### Components

1. **BourbonDistilleryList**: This component displays a list of bourbon distilleries fetched from the backend. It allows users to view all distilleries, navigate to details pages, update distillery information, and delete distilleries.

2. **BourbonDistilleryDetails**: This component shows detailed information about a specific bourbon distillery, including its name, license number, address, and associated collections of bourbons and customers.

3. **BourbonDistilleryForm**: This component provides a form for creating a new bourbon distillery. It includes input fields for all attributes of a distillery, including name, license number, address, and collections of bourbons and customers.

4. **BourbonDistilleryUpdate**: This component allows users to update the information of an existing bourbon distillery. It displays a form pre-filled with the current data of the distillery and allows users to modify and submit the changes.

### Routing

- **React Router**: Used for client-side routing to navigate between different components/pages of the application.

### Dependencies

- **react**: Core library for building user interfaces in React.
- **react-dom**: Provides DOM-specific methods that can be used at the top level of the web application.
- **react-router-dom**: Provides routing capabilities for React applications.
- **axios**: Used for making HTTP requests to the backend API.
- **bootstrap**: Provides styling and layout utilities for building responsive web applications.

## Backend (Spring Boot)

### Controllers

1. **BourbonDistilleryController**: Manages HTTP requests related to bourbon distilleries, including CRUD operations.

### Service

1. **BourbonDistilleryService**: Handles business logic related to bourbon distilleries, such as data validation and interaction with the repository layer.

### Entity

1. **BourbonDistillery**: Represents a bourbon distillery entity with attributes such as name, license number, address, and collections of bourbons and customers.

### Repositories

1. **BourbonDistilleryRepository**: Interface for CRUD operations on bourbon distillery entities.

### Dependencies

- **spring-boot-starter-data-jpa**: Provides support for Spring Data JPA, which simplifies data access operations.
- **spring-boot-starter-web**: Starter for building web applications with Spring MVC.
- **spring-boot-starter-validation**: Adds support for bean validation using JSR-380 annotations.
- **com.h2database:h2**: Embedded relational database for development and testing purposes.
- **org.projectlombok:lombok**: Library to reduce boilerplate code in Java entities and classes.
## Validation

- **Frontend Validation**: Implemented using HTML5 input field attributes like `required` and `pattern`, along with custom error messages.
- **Backend Validation**: Utilizes JSR-380 annotations such as `@NotNull`, `@Size`, and `@Pattern` for validating entity attributes.

## Styling

- **CSS**: Basic CSS styles are applied to components using classes to improve visual appearance and layout.

## Documentation

- **Code Comments**: Inline comments are added to code snippets to explain their purpose and functionality.
- **Readme.md**: Contains high-level information about the project, including setup instructions and usage guidelines.

---

This documentation provides an overview of the Bourbon Distillery Management Application, including its frontend and backend components, dependencies, validation mechanisms, styling approach, and documentation practices. It serves as a reference for developers working on the project and helps them understand the design decisions and implementation details.
