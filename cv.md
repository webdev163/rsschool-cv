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

## Work experience

No commercial developer experience or work participation until now. One of my aims in taking RSSchool courses is to change the fact above

## Education

I have a law degree (2010) and a good experience in that field. In 2020 I started self-education in frontend field. Particularly all my listed skills were gained while self-educating. In 2021 I realized the need of learning backend basics, that's why I have passed wordpress course in GLO Academy (2 months).

## English level
My current English level is B2-C1. Certificates:
- Certificate of completion of 2 weeks-course in ILSC New York (2016)