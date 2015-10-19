## How to add sass and browser syn in package.json

#### Step 1

Open your package.json file and go to `"scripts"``.

#### Step 2

Add this 2 lines in your `"scripts"`

```
"start": "browser-sync start --server --files='*.html,css/*.css,js/*.js'"
"sass":"node-sass src/scss/main.scss src/css/main.css --watch scss/“
```

#### Step 3

Now you can go to your terminal command and type:

`npm start`  to enjoy your files being updated in the browser without any more steps.

`npm run sass` to update your css files while you are working in your scss files.


Those are basically the lines to add in your package.son but I am going to explain them a little specially the path for the files.

We have to think on the position of the files in relation with our file package.son. The computer will go through this path to look for the file (css or js or css). Everytime we go up a level on files we add ../ and when we go deeper in the tree files we specify the path to reach or destination file.

If we want to use browser-sync in our directory we need to use this path instead:

```
"start": "browser-sync start --server --directory"
```
