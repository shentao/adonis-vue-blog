'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/about').render('about')
Route.on('/contact').render('contact')

Route.get('/posts', 'PostController.index').middleware('auth')
Route.post('/posts/create', 'PostController.create').middleware('auth')
Route.get('/posts/:id', 'PostController.show')

Route.post('/login', 'UserController.login')
Route.post('/signup', 'UserController.signup')
