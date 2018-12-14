const theOneFunc =  delay => {
    console.log('Hello Tonux after : '+delay+ ' seconds');
};

i = 0;
while (i < 10){
    setTimeout(theOneFunc, i*1000, i);
    i++;
}


