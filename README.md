# IN10 Model Generator

NPM installable package that generates models for next projects.

## How to install

Install the package by adding the following devDependency to your package.json:

`"in10-model-generator": "github:IN10/IN10-model-generator#v???"`

Notice the version (semver) after the #, use this to bump the version or install an older version of this package.

## How to use

To use the generator, add the following script to your package.json (so within
`"scripts": {}`):
  
 `"generate-model": "model-generator"`

The script requires this argument

`--apiVar=` followed by the variable name of the env var in your env that contains endpoint of the API.

And accepts the following optional arguments:
`--dir=` followd by the folder in the root where you want the models to be created (defaults to `/models`)

Note that this arg should be added within the script in your package.json,
e.g.

`"generate-model": "model-generator --apiVar=API_URL --dir=middleware/models`
(so this example needs something like `API_URL=https://api.in10.nl/nl/` in your .env)

Then run this with
`npm run generate-model`

## Dependencies

Please note that this generator is specifically to be used within the IN10 setups, but in practice it creates a
model file containing transformation and endpoints but most importantly an automatic typing of and API endpoint. So if you don't use
the model-configuration in your setup, you can still use the automatically generated and checked typings.

## What it does

The script generates an API-model for you. The script provides a wizard where u can choose the name of your model and the endpoint 
that corresponds to the model. These models can then be used to fetch data from the server and transform it to the data-structure that is 
used within your application, this transformation step is of course optional. More importantly the scripts also uses QuickType (quicktype-core) to automatically
type the data that is returned for the endpoint, this typing can then be used within your application.
Other then generating these typed models it can update existing models with new types. This way, if the API changes structure, you
can overwrite the automatic typing with the new structure and typescript will warn you on issues within your typing.

The following files will be generated in a `/model` folder within the root of your project:

- ModelName (dir)
    - ModelName.ts (object containing the endpoint and reference to the transformation file)
    - ModelName.transform.d.ts (automatically)
    - ModelName.transform.ts (Function that can be used to tranform the incoming (API) typing to the internal typing (as in ModelName.type.ts))
    - ModelName.type.ts (optional typing that is used within the application for this model if this differs from API typing)

## To do

-   Add option to generate a diff file between old and new typing when updating and endpoint
## Other

Slack me (Jules) for questions or additions.
Or better yet: create a pull request! Slack me for tips on developing an npm module (use [npm link](https://docs.npmjs.com/cli/link.html)!)
