//ES6 module - An external file that contains reusable code that can be imported into other javascript 
// can contain variables , classes and functions and more introduced as part of ECMA script 2015 update.



export const PI = 3.1495;
export function getCircumference(radius)
{
   return 2* PI*radius;
}

export function getArea(radius)
{
    return PI * radius * radius;
}

export function getVolume(radius)
{
    return 4*PI*radius*radius;
}
