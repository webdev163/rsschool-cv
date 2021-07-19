# Dmitry Kolesnichenko

## Contacts

- City: Samara
- Phone: +7 (996) 727-75-22
- E-mail: [dmitriykol@gmail.com](mailto:dmitriykol@gmail.com)
- Telegram: dmitry799
- Github: [webdev163](https://github.com/webdev163)

## Summary

Beginner Frontend developer, 33 years old, 1 year of selfeducating experience, no commercial experience. My aim is to get comprehensive knowledge in frontend and to find people with the same ambitions. I'am also interested in career growth in this particular area. My main strengths are:
- fast learning
- curiosity
- self control
- good English
- enjoyment of work

## Skills

- HTML, CSS
- EJS, SASS, LESS
- BEM, CSS Modules, Bootstrap
- Postcss
- JavaScript
- NPM, Webpack, babel, gulp
- Eslint, stylelint
- PHP/Wordpress
- Git, GitHub

## Code sample

Gulp task for creating new module files for postcss-modules package:

```javascript
const newmodule = (done) => {
    fs.mkdir((paths.src.modules + `${process.argv[4]}/`), function (err) {
        if (err) throw err;
        console.log('Directory created');
    })
    fs.writeFile((paths.src.modules + `${process.argv[4]}/${process.argv[4]}.ejs`), '', function (err) {
        if (err) throw err;
        console.log('EJS file created');
    })
    fs.writeFile((paths.src.modules + `${process.argv[4]}/${process.argv[4]}.scss`), '', function (err) {
        if (err) throw err;
        console.log('SCSS file created');
    })
    fs.appendFile(paths.src.scss + 'style.scss', (`@import '../modules/_css/${process.argv[4]}';\n`), function (err) {
        if (err) throw err;
        console.log('style.scss updated');
    });
    console.log(`---------------------------------------------------------------------------\ncopy to index.html -->\t<%- include('../modules/_html/${process.argv[4]}.ejs'); %>\n---------------------------------------------------------------------------`)
    done()
};

exports.newmodule = newmodule;
```