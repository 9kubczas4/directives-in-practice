# Directives In Practice
The application was developed to showcase different scenarios where utilizing Directives in Angular can be advantageous. In the repository, we can compare the implementations of solutions using directives versus the standard approach.

Note: It is crucial not to consider all usages of directives as 'Best Practices'. The objective of the presentation was to motivate developers and demonstrate diverse solutions where utilizing directives could be an intriguing choice.

Note: Please note that the application utilizes two UI libraries, and the rationale behind this choice is straightforward. By incorporating these libraries, I was able to showcase a broader range of use cases and demonstrate their practical applications.

## Project folder structure

    .
    ├── enums
    ├── helpers
    ├── pages                     
    │   ├── directive-composition-api   # Use cases implemented using Directive Composition API
    │   ├── directive-solutions         # Use cases implemented using Directive solutions
    │   └── naive                       # Contains standard approach for various use cases
    ├── services                    
    ├── types                     
    └── app.component.ts

# Presentation - Angular Wrocław

It was presented by [Paweł Kubiak](https://twitter.com/pawelkubiakdev) on [Angular Wrocław Meetup](https://twitter.com/AngularWroclaw).

Link to presentation: https://docs.google.com/presentation/d/1DzGatYGiz7DA6T36QnKThWHtUwqNJ4Qr5zmvPCKpS6Q/edit?usp=sharing

# Use Cases

0. NgPlural
1. Open External Links in the new tab
2. Validate Password Strength
3. Extend 3rd Party Component - Calendar (PrimeNg)
4. Extend 3rd Party Components - Dropdown (PrimeNg)
5. User Permission
  - display/hide elements
  - disable elements
6. Smart Directive - Context Menu
7. Directive Composition API - Context Menu

# Resources
I would like to thank all the creators who inspired me to create this presentation.
I used the following materials to prepare the presentation:

## Attribute Directives
  * [Video - Angular Directives - Build a Hold-to-Delete Button](https://www.youtube.com/watch?v=kl-UMCHpEsw) by [Fireship](https://twitter.com/fireship_dev)
  * [Article - Use Angular directives to extend components that you don't own](https://timdeschryver.dev/blog/use-angular-directives-to-extend-components-that-you-dont-own) by [Tim Deschryver](https://twitter.com/tim_deschryver)
  * [Article - Superpowers with Directives and Dependency Injection: Part 1](https://dev.to/this-is-angular/superpowers-with-directives-and-dependency-injection-part-1-ho7) by [Armen Vardanyan](https://twitter.com/Armandotrue)
  * [Article - Superpowers with Directives and Dependency Injection: Part 3](https://dev.to/this-is-angular/superpowers-with-directives-and-dependency-injection-part-3-18ja) by [Armen Vardanyan](https://twitter.com/Armandotrue)
  * [Article - Superpowers with Directives and Dependency Injection: Part 4](https://dev.to/this-is-angular/superpowers-with-directives-and-dependency-injection-part-4-2gi8) by [Armen Vardanyan](https://twitter.com/Armandotrue)

## Structural Directives
  * [Video - Demystified Angular Directives](https://www.youtube.com/watch?v=bVyw2njDoZw) by [Nir Kaufman](https://twitter.com/nirkaufman)
  * [Video - Structural Directives in Angular – How to Create Custom Directive](https://www.youtube.com/watch?v=07CaGlbMPbw) by [Dmytro Mezhenskyi](https://twitter.com/DecodedFrontend)
  * [Video - NgTemplateOutlet in Angular - Everything You Have to Know (2022)](https://www.youtube.com/watch?v=vfPVdJ2oQlM) by [Dmytro Mezhenskyi](https://twitter.com/DecodedFrontend)
  * [Article - Superpowers with Directives and Dependency Injection: Part 2](https://dev.to/this-is-angular/superpowers-with-directives-and-dependency-injection-part-2-16ea) by [Armen Vardanyan](https://twitter.com/Armandotrue)
  * [Article - Create a custom Structural Directive to manage permissions](https://dev.to/this-is-angular/create-a-custom-structural-directive-to-manage-permissions-like-a-pro-5293) by [Thomas Laforge](https://twitter.com/laforge_toma)


## Directive Composition API - new feature Angular 15
  * [Video - Angular Directive Composition | Kevin Kreuzer | Angular Tiny Conf Peret 2022](https://www.youtube.com/watch?v=5lYs251skTA) by [Kevin Kreuzer](https://twitter.com/kreuzercode)
  * [Video - Introducing the Directive Composition API in Angular v15](https://www.youtube.com/watch?v=EJJwyyjsRGs) by [Angular](https://twitter.com/angular) - new feature Angular 15
  * [Video - Directive Composition API Intro w/ Kristiyan Kostadinov](https://www.youtube.com/watch?v=oC9Qd9yw3pE) by [Kristiyan Kostadinov](https://twitter.com/_crisbeto)
  * [Video - Learn What the Directive Composition API Is and How To Use It in Angular 15](https://www.youtube.com/watch?v=2S6FVt-tQ7M) by [Fanis Prodromou](https://twitter.com/prodromouf)
  * [Article - Making DRY Conditional Structural Directives Using Angular Directive Composition API](https://netbasal.com/making-dry-conditional-structural-directives-using-angular-directive-composition-api-bc346672445d) by [Netanel Basal](https://twitter.com/NetanelBasal)


# Additional Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
