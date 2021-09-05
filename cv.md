# Dmitry Kolesnichenko

## Contacts

- City: Samara
- Phone: +7 (996) 727-75-22
- E-mail: [dmitriykol@gmail.com](mailto:dmitriykol@gmail.com)
- Telegram: dmitry799
- Github: [webdev163](https://github.com/webdev163)

## Summary

Junior Frontend developer, 33 years old, 1 year of selfeducating experience, no commercial experience. My aim is to get comprehensive knowledge in frontend and to find people with the same ambitions. I'am also interested in career growth in this particular area. My main strengths are:
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

Function to convert RGB to hex:

```javascript
function rgb(r, g, b) {
  const args = Array.prototype.slice.call(arguments);
  result = [];
  args.forEach(el => {
    if (el <= 0) {
      result.push('00');
    } else if (el < 16) {
      result.push('0' + el.toString(16));
    } else if (el > 255) {
      el = 255;
      result.push(el.toString(16));
    } else {
      result.push(el.toString(16));
    }
  })
  return result.join('').toUpperCase();
}
```

## Work experience

No commercial developer experience or work participation until now. One of my aims in taking RSSchool courses is to change the fact above

## Education

I have a law degree (2010) and a good experience in that field. In 2020 I started self-education in frontend field. Particularly all my listed skills were gained while self-educating. In 2021 I realized the need of learning backend basics, that's why I have passed wordpress course (2 months).

## English level
My current English level is B2-C1. Certificates:
- Certificate of completion of 2 weeks-course in ILSC New York (2016)